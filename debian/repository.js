const spawnPromise = require('./spawnPromise');
const processAptShow = require('./util/processAptShow');
const processAptList = require('./util/processAptList');
const processAptPolicy = require('./util/processAptPolicy');

async function packageDetails(packageName) {
    try {
        return processAptShow(await spawnPromise('apt-cache', ['show', packageName]));
    } catch (error) {
        throw error;
    }
}

async function packageList(query) {
    try {
        return processAptList(await spawnPromise('apt-cache', ['search', query]));
    } catch (error) {
        throw error;
    }
}

async function packageVersions(packageName) {
    try {
        return processAptPolicy(await spawnPromise('apt-cache', ['policy', packageName]));
    } catch (error) {
        throw error;
    }
}


class AptRepoAdapter {
    static getPackages = packageList;
    static getPackage = packageDetails
    static getPackageVersions = packageVersions;
}

module.exports = AptRepoAdapter;
