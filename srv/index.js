const Server = require('./server');

const PORT = 8080
const server = new Server();
server.get("/buna", async (body, query) => {
  console.log(`Hello, the body is ${body} and the query ${JSON.stringify(query)}`);
  return null;
});
server.post("/buna", async (body, query) => {
  console.log(`Hello, the body is ${JSON.stringify(body)} and the query ${JSON.stringify(query)}`);
  return null;
});
server.listen(PORT);
