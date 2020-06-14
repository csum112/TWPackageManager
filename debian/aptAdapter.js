const spawnPromise = require('./spawnPromise');
const processAptShow = require('./util/processAptShow');
const processAptList = require('./util/processAptList');

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


class AptRepoAdapter {
    static getPackages = packageList;
    static getPackage = packageDetails
}

module.exports = AptRepoAdapter;
