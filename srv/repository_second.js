const { asyncGetJson } = require('./util');

class Arch {
    packageEP = "https://www.archlinux.org/packages/search/json/?name=";
    allPackagesEP = "https://www.archlinux.org/packages/search/json/?q=";
    cache = null;

    preprocess(pkg) {
        let { pkgname, pkgdesc, url, depends } = pkg
        depends = depends.filter(x => !x.includes("=") || !x.includes("<") || !x.includes(">"));
        if(depends == null)
            depends = [];
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
        return pkgArr;
    }

    async getPackage(packageName) {
        console.log(packageName)
        let pkgreq = [];
        try {
            pkgreq = await asyncGetJson(this.packageEP + packageName);
        } catch(error) {
            console.log(packageName)
        }
        if(pkgreq.results.length == 1)
            return this.preprocess(pkgreq.results[0]);
        else
            return {};
    }
}

module.exports = { Arch }