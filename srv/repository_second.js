const { asyncGetJson } = require('./util');

class Arch {
    packageEP = "https://www.archlinux.org/packages/search/json/?name=";
    allPackagesEP = "https://www.archlinux.org/packages/search/json/?q=";
    cache = null;

    preprocess(pkg) {
        let { pkgname, pkgdesc, url, depends } = pkg
        return {
            name: pkgname,
            desc: pkgdesc,
            homepage: url,
            dependencies: depends
        };
    }

    async getAllPackages(filterFunction, limit) {
        let pkgArr = await asyncGetJson(this.allPackagesEP + filterFunction);
        pkgArr = pkgArr.results
            .map(e => e.pkgname);
        if(pkgArr.length > limit)
            pkgArr.length = limit;
        console.log(pkgArr);
        return pkgArr;
    }

    async getPackage(packageName) {
        let pkgreq = await asyncGetJson(this.packageEP + packageName);
        if(pkgreq.results.length == 1)
            return this.preprocess(pkgreq.results[0]);
        else
            return [];
    }
}

module.exports = { Arch }