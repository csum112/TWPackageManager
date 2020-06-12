const Server = require('./server');
const { Brew } = require('./repository');
const { Arch } = require('./repository_second');
const PORT = 8081;
const DEFAULT_PACKAGE_NUMBER = 40;
const server = new Server();


const arch = new Arch();
const brew = new Brew();


server.get("/brew/packages", async (body, query) => {
  let limit = DEFAULT_PACKAGE_NUMBER;
  if ('limit' in query)
    limit = query.limit;
  let pkgs = await brew.getAllPackages((x) => x.name.includes(query.prefix), limit);
  return pkgs;
});

server.get("/brew/package", async (body, query) => {
  let packageName = query.packageName;
  if (packageName == null) throw { status: 404 };
  let pkg = await brew.getPackage(packageName);
  return pkg;
});

server.post("/brew/checkout", async (body, query) => {
  if (body.packageNames == null) {
    return "";
  }
  let pkgNames = body.packageNames;

  let listOfPromiseLists = pkgNames.map(parseDep);
  let listOfLists = await Promise.all(listOfPromiseLists);
  
  let list = [];
  listOfLists.forEach(innerList => {
    innerList.forEach(name => {
      if (!list.includes(name)) {
        list.push(name);
      }
    });
  });

  let script = "";
  list.forEach(pkg => {
    script += "brew install " + pkg + " -y && ";
  });
  script = script.substring(0, script.length - 4);

  return script;
});

async function parseDep(pkgName) {
  let pkg = await brew.getPackage(pkgName);
  let dependencies = pkg.dependencies;

  let list = [];
  dependencies.forEach(depName => {
    let innerList = parseDep(depName);
    list.push(innerList);
  });

  let pkgListNames = [];
  let listOfNameLists = await Promise.all(list);
  listOfNameLists.forEach(listOfNames => {
    listOfNames.forEach(name => {
      if (!pkgListNames.includes(name)) {
        pkgListNames.push(name);
      }
    });
  });

  pkgListNames.push(pkgName);
  return pkgListNames;
}


server.get("/arch/packages", async (body, query) => {
  let limit = DEFAULT_PACKAGE_NUMBER;
  if ('limit' in query)
    limit = query.limit;
  console.log(query.prefix);
  let pkgs = await arch.getAllPackages(query.prefix, limit);
  return pkgs;
});

server.get("/arch/package", async (body, query) => {
  let packageName = query.packageName;
  if (packageName == null) throw { status: 404 };
  let pkg = await arch.getPackage(packageName);
  return pkg;
});
server.listen(PORT);