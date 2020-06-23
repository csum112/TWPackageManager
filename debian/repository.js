const spawnPromise = require('./spawnPromise');
const processAptShow = require('./util/processAptShow');
const processAptList = require('./util/processAptList');
const processAptPolicy = require('./util/processAptPolicy');
const {getCacheOrCompute} = require('./cache.js');

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

function toInstallCommand(pkg) {
    if(pkg.version) {
        return `apt-get install -y ${pkg.packageName}=${pkg.version}`;
    } else return `apt-get install -y ${pkg.packageName}`;
}

class AptRepoAdapter {
    static toInstallCommand = toInstallCommand
    static getPackages = (param) => getCacheOrCompute(param, packageList, "PACKAGE_LIST"); 
    static getPackage = (param) => getCacheOrCompute(param, packageDetails, "PACKAGE_DETAILS"); 
    static getPackageVersions = packageVersions;
}

module.exports = AptRepoAdapter;
