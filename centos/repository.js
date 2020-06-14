const spawnPromise = require('./spawnPromise');
const processYumInfo = require('./util/processYumInfo');
const processYumList = require('./util/processYumList');

async function packageDetails(packageName) {
    try {
        return processYumInfo(await spawnPromise('yum', ['info', packageName, '-q']));
    } catch (error) {
        throw error;
    }
}

async function packageList(query) {
    try {
        return processYumList(await spawnPromise('yum', ['list', '-q']));
    } catch (error) {
        console.log(error)
        throw error;
    }
}


class YumRepositoryAdapter {
    static getPackages = packageList;
    static getPackage = packageDetails
}

module.exports = YumRepositoryAdapter;
