const Server = require('./server');

const PORT = 8080
const server = new Server();
server.get("/buna", async (body, query) => {
  console.log(body);
  return null;
});
server.listen(PORT);

const url = require('url');
const parsed = url.parse('/route/secondroute?hello-2=asd?filter=asd');
