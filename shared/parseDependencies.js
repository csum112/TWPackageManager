const Repo = require('./repository');


async function parseDep(packageName, toInstall = [], trace = []) {
    if (toInstall.includes(packageName)) {
        console.log(`[${packageName}]Already resolved`);
        return toInstall;
    }
    if (trace.includes(packageName)) {
        throw { circularDependency: packageName };
    }
    console.log(`[${packageName}] fetching dependencies`);
    let dependecies = null;
    try {
        dependecies = (await Repo.getPackage(packageName)).depends || [];
    } catch (error) { throw `Failed to get package ${packageName}: ` + error };

    trace.push(packageName);
    for (let i = 0; i < dependecies.length; i++) {
        let dep = dependecies[i].packageName;
        try {
            toInstall = await parseDep(dep, toInstall, trace);
        } catch (error) {
            if (error.circularDependency) {
                let packageWhoThrowed = error.circularDependency
                if (dep != packageWhoThrowed)
                    throw error;
                else {
                    toInstall.push(dep)
                    console.log(`[${dep}]Fixed circular dependency`);
                }
            } else throw error;
        }
    }
    trace.splice(trace.length - 1, 1);


    toInstall.push(packageName);
    console.log(`[${packageName}] done!`);
    return toInstall;
}

module.exports = parseDep