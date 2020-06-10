const Server = require('./server');
const {asyncGetJson} = require('./util');

const PORT = 8081;
const server = new Server();

server.get("/", async (body, query) => {
  return {message: "Hello, World!"};
})

server.get("/buna", async (body, query) => {
  console.log(`Hello, the body is ${body} and the query ${JSON.stringify(query)}`);
  return null;
});

server.post("/buna", async (body, query) => {
  console.log(`Hello, the body is ${JSON.stringify(body)} and the query ${JSON.stringify(query)}`);
  return null;
});

asyncGetJson('https://formulae.brew.sh/api/formula.json').then((data) => {
  console.log(data.map(entity => entity.name));
});

//server.listen(PORT);
