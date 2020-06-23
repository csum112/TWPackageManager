const spawnPromise = require('./spawnPromise');
const processAptShow = require('./util/processAptShow');
const processAptList = require('./util/processAptList');
const processAptPolicy = require('./util/processAptPolicy');
const cache = require('./cache.js');

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
    static getPackages = (param) => cache(param, packageList, "PACKAGE_LIST"); 
    static getPackage = (param) => cache(param, packageDetails, "PACKAGE_DETAILS"); 
    static getPackageVersions = packageVersions;
}

module.exports = AptRepoAdapter;
