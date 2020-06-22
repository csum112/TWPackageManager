const spawnPromise = require('./spawnPromise');
const processYumInfo = require('./util/processYumInfo');
const processYumList = require('./util/processYumList');

async function packageDetails(packageName, version) {
    if(version)
        packageName = `${packageName}-${version}`
    try {
        return processYumInfo([
            await spawnPromise('yum', ['info', packageName, '-q']), 
            await spawnPromise('yum', ['deplist', packageName])
        ]);
    } catch (error) {
        throw error;
    }
}

async function packageList(query) {
    try {
        if (query !== ".")
            return processYumList(await spawnPromise('yum', ['list', query, '-q']));
        else 
            return processYumList(await spawnPromise('yum', ['list', '-q']));
    } catch (error) {
        throw error;
    }
}


class YumRepositoryAdapter {
    static getPackages = packageList;
    static getPackage = packageDetails;
    static repoName = "centos"
}

module.exports = YumRepositoryAdapter;
