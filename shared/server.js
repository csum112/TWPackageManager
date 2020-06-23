const express = require('express');
const Repo = require('./repository')
const { mongoClient } = require('./cache');
const app = express();
const cors = require('cors');
const parseDep = require('./parseDependencies');

app.use(cors());

const PORT = process.env.PORT || 8080



app.get("/packages", async (req, res) => {
    let page = req.query.page || 0;
    let limit = req.query.limit || 40;
    let query = req.query.q || ".";

    let packageList = await Repo.getPackages(query);
    packageList = packageList
        .splice(parseInt(page) * parseInt(limit));
    if (packageList.length > limit)
        packageList.length = parseInt(limit);

    res.status(200).send(packageList);
});

app.get("/packages/:packageName", async (req, res) => {
    let packageName = req.params.packageName;
    let version = req.query.version || null;

    try {
        let packageData = await Repo.getPackage(packageName, version);
        res.status(200).send(packageData);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.post("/checkout", async (req, res) => {
    //console.log(req);
    res.status(200).send("ceva");
});

console.log(`The connection string is: ${process.env.CONNECTION_STRING}`);
console.log(`The dbname is: ${process.env.DBNAME}`);
console.log(`Starting server on port ${PORT}`);
mongoClient.connect().then(() => app.listen(PORT))
// parseDep('javapackages-tools').then(deps => console.log(JSON.stringify(deps))).catch(console.log);
// Repo.getPackage('libxslt').then(console.log).catch(console.log)
parseDep('0ad').then(deps => console.log(JSON.stringify(deps))).catch(console.log);
//Repo.getPackageVersions('zlib1g').then(console.log).catch(console.log);
process.on('SIGINT', () => {
    mongoClient.close();
    process.exit(1);
});