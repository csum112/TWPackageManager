const http = require('http')
const url = require('url')
const querystring = require('querystring');


function parseBody(req) {
    return new Promise((resolve, err) => {
        let body = [];
        req
            .on("data", (data) => {
                body.push(data);
            })
            .on("end", () => {
                body = Buffer.concat(body).toString();
                if (body != "") {
                    try {
                        body = JSON.parse(body);
                    } catch (error) {
                        err(error);
                    }
                    resolve(body);
                } else resolve(null);
            });
    });
}


class Router {
    constructor() {
        this.routes = [];
    }

    get(path, callback) {
        this.routes.push({
            method: "GET",
            path: path,
            cback: callback
        });
    }

    post(path, callback) {
        this.routes.push({
            method: "POST",
            path: path,
            cback: callback
        });
    }

    listen(port) {
        console.log(`Starting server on ${port}`);
        http.createServer(async (req, res) => {
            let parsedUrl = url.parse(req.url);
            let path = parsedUrl.pathname;
            let method = req.method;

            req.query = querystring.parse(parsedUrl.query) || {};
            req.path = path;
            req.body = async () => { return parseBody(req) };

            let route = this.routes
                .filter(r => r.method == method)
                .find(r => r.path.test(path));

            if (route == null) {
                res.statusCode = 404;
                res.end("Not found");
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                await route.cback(req, res);
            }
        }).listen(port);
    }
}

module.exports = Router

