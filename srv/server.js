const http = require('http')
const url = require('url')
const querystring = require('querystring');
const {writeDataToHead, parseBody} = require('./util');

class Server {
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
        let query = null;
        let body = null;
        try {
            body = await parseBody(req);
        } catch (error) {
            res.statusCode = 509;
            res.end();
        }

        try {
            query = querystring.parse(parsedUrl.query);
        } catch (error) {
            res.statusCode = 509;
            res.end();
        }

        let route = this.routes
            .filter(r => r.method == method)
            .find(r => r.path == path);

        if (route == null) {
            res.statusCode = 404;
            res.end("Not found");
        } else {
            try {
                let data = await route.cback(body, query);
                writeDataToHead(res, {data: data});
            } catch (error) {
                res.statusCode = 509;
                res.end();
                console.log(error);
            }
        }
    }).listen(port);
  }
}

module.exports = Server