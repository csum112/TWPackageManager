const https = require('https')
// https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/

function asyncGetJson(reqUrl) {
  return new Promise((resolve, error) => {
    https.get(reqUrl, res => {
      let body = "";
      res.on("data", data => {
        if (data.includes("<html>")) error("404");
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        resolve(body);
      });
      res.on("error", error);
    });
  });
};


function parseBody(req) {
  return new Promise((resolve, err) => {
    let body = [];
    req
      .on("data", (data) => {
        body.push(data);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        if(body != "") {
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

function writeDataToHead(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}


module.exports = { asyncGetJson, writeDataToHead, parseBody }
