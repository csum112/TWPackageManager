const express = require('express');
const Repo = require('./repository')
const app = express();

const PORT = process.env.port || 8080

app.get("/package", async (req, res) => {
    let page = req.query.page || 0;
    let limit = req.query.limit || 40;
    let query = req.query.q || ".";

    let packageList = await Repo.getPackages(query);
    packageList = packageList
        .splice(parseInt(page) * parseInt(limit));
    if (packageList.length > limit)
        packageList.length = parseInt(limit);


    // let pkgNames = packageList;
    // let listOfPromiseLists = pkgNames.map(pkgName => {
    //     console.log(pkgName);
    //     return parseDep(pkgName);
    // });
    // let listOfLists = await Promise.all(listOfPromiseLists);
        
    // let list = [];
    // listOfLists.forEach(innerList => {
    //     innerList.forEach(name => {
    //         if (!list.includes(name)) {
    //             list.push(name);
    //             console.log(name);
    //         }
    //     });
    //     console.log('\n');
    // });


    res.status(200).send(packageList)
})

app.get("/package/:packageName", async (req, res) => {
    let packageName = req.params.packageName;
    try {
        let packageData = await Repo.getPackage(packageName);
        res.status(200).send(packageData)
    } catch (error) {
        res.status(404).send(error)
    }
})


async function parseDep(pkgName) {
    let pkg = null;
    pkg = await Repo.getPackage(pkgName);

    let dependencies = pkg[0].depends;
    if (dependencies == [])
        return [];
        
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



console.log(`Starting server on port ${PORT}`)
app.listen(PORT);

process.on('SIGINT', () => process.exit(1));