const spawnPromise = require('./spawnPromise');
const processYumInfo = require('./util/processYumInfo');
const processYumList = require('./util/processYumList');
const {getCacheOrCompute} = require('./cache');


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

function toInstallCommand(pkg) {
    if(pkg.version) {
        return `yum install -y ${pkg.packageName}-${pkg.version}`;
    } else return `yum install -y ${pkg.packageName}`;
}

class YumRepositoryAdapter {
    static toInstallCommand = toInstallCommand
    static getPackages = (param) => getCacheOrCompute(param, packageList, "PACKAGE_LIST"); 
    static getPackage = (param) => getCacheOrCompute(param, packageDetails, "PACKAGE_DETAILS"); ;
}

module.exports = YumRepositoryAdapter;
