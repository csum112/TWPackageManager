const Server = require('./server');
const {Brew} = require('./repository')
const PORT = 8081;
const DEFAULT_PACKAGE_NUMBER = 40;
const server = new Server();

const brew = new Brew();

server.get("/", async (body, query) => {
  return { message: "Hello, World!" };
})

server.get("/brew/packages", async (body, query) => {
  let limit = DEFAULT_PACKAGE_NUMBER;
  if ('limit' in query)
    limit = query.limit;
  let pkgs =  await brew.getAllPackages((x) => x.name.includes(query.prefix), limit);
  return pkgs
});

server.get("/brew/package", async (body, query) => {
  let packageName = query.packageName;
  if (packageName == null) throw {status: 404};
  let pkg = await brew.getPackage(packageName);
  return pkg;
})


server.listen(PORT);
