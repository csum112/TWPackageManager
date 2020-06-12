const { asyncGetJson } = require('./util');

class Arch {
    allPackagesEP = "https://www.archlinux.org/packages/search/json/?q=";
    cache = null;

    preprocess(pkg) {
        let { pkgname, pkgdesc, url, depends } = pkg
        return {
            name,
            desc,
            homepage,
            dependencies
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
        let pkgArr = null;
        if (this.cache == null) {
            pkgArr = await asyncGetJson(this.allPackagesEP);
            pkgArr = pkgArr.map(this.preprocess);
            this.cache = pkgArr;
        } else
            pkgArr = this.cache;
        
        let pkg = pkgArr.find(pkg => pkg.name == packageName);
        return pkg;
    }
}

module.exports = { Arch }