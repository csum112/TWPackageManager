const express = require('express');
const Repo = require('./aptAdapter')
const app = express();

const PORT = 3000

app.get("/package", async (req, res) => {
    let page = req.query.page || 0;
    let limit = req.query.limit || 40;
    let query = req.query.q || ".";

    let packageList = await Repo.getPackages(query);
    packageList = packageList
        .splice(parseInt(page) * parseInt(limit));
    if (packageList.length > limit)
        packageList.length = parseInt(limit);
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

console.log(`Starting server on port ${PORT}`)
app.listen(PORT);