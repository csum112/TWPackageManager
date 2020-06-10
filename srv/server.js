const http = require('http')
const url = require('url')
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
        let path = parsedUrl.path;
        let method = req.method;
        let query = parsedUrl.query
        let body = await parseBody(req);

        const route = this.routes
            .filter(r => r.method == method)
            .find(r => r.path == path);

        if (route == null) {
            res.statusCode = 404;
            res.end();
        } else {
            let data = await route.cback(body, query);
            writeDataToHead(res, {data: data});
        }
    }).listen(port);
  }
}

module.exports = Server