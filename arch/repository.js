const spawnPromise = require('./spawnPromise');
const processPacmanSi = require('./util/processPacmanSi');
const processPacmanSs = require('./util/processPacmanSs');

async function packageDetails(packageName) {
    try {
        return processPacmanSi(await spawnPromise('pacman', ['-Si', packageName]));
    } catch (error) {
        throw error;
    }
}

async function packageList(query) {
    try {
        return processPacmanSs(await spawnPromise('pacman', ['-Ss', query]));
    } catch (error) {
        throw error;
    }
}


class PacmanRepoAdapter {
    static getPackages = packageList;
    static getPackage = packageDetails
}

module.exports = PacmanRepoAdapter;
