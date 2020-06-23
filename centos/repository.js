const spawnPromise = require('./spawnPromise');
const processYumInfo = require('./util/processYumInfo');
const processYumList = require('./util/processYumList');
const cache = require('./cache');


async function packageDetails(packageName, version) {
    if(version)
        packageName = `${packageName}-${version}`
    try {
        return processYumInfo([
            await spawnPromise('yum', ['info', packageName, '-q']), 
            await spawnPromise('yum', ['deplist', packageName, '-q'])
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
    static getPackages = (param) => cache(param, packageList, "PACKAGE_LIST"); 
    static getPackage = (param) => cache(param, packageDetails, "PACKAGE_DETAILS"); ;
    static repoName = "centos"
}

module.exports = YumRepositoryAdapter;
