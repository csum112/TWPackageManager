const { asyncGetJson } = require('./util');

class Brew {
    allPackagesEP = "https://formulae.brew.sh/api/formula.json";
    cache = null;

    preprocess(pkg) {
        let { name, desc, homepage, dependencies } = pkg
        return {
            name,
            desc,
            homepage,
            dependencies
        };
    }

    async getAllPackages(filterFunction, limit) {
        let pkgArr = null;
        if (this.cache == null) {
            pkgArr = await asyncGetJson(this.allPackagesEP);
            pkgArr = pkgArr.map(this.preprocess);
            this.cache = pkgArr;
        } else
            pkgArr = this.cache;

        pkgArr = pkgArr
            .filter(filterFunction)
            .map(e => e.name);
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

module.exports = { Brew }