const https = require('https')
// https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/

function asyncGetJson(reqUrl) {
  return new Promise((resolve, error) => {
    https.get(reqUrl, res => {
      let body = "";
      res.on("data", data => {
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
        try {
          body = JSON.parse(body);
        } catch (error) {
          err(error);
        }
        resolve(body);
      });
  });
}

function writeDataToHead(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}


module.exports = { asyncGetJson, writeDataToHead, parseBody }


//Example: 
// asyncGetJson("https://formulae.brew.sh/api/formula.json")
//     .then(arr => {
//         const names = arr
//         .map(entry => entry.name)
//         .filter(name => name.match(/([A-z]|[0-9])*/g))
//         console.log(names)
//     });