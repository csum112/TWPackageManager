const Repo = require('./repository');


async function parseDep(packageName, toInstall = [], trace = [], constraint = null) {
    console.log(`[${packageName}] Started processing...`);
    if (trace.includes(packageName)) {
        throw { circularDependency: packageName };
    }
    if (toInstall.some(pkg => {
        return pkg.packageName == packageName;
    })) {
        console.log(`[${packageName}]Already resolved`);
        return toInstall.map(pkg => {
            if (pkg.packageName == packageName) {
                if (pkg.constraints)
                    pkg.constraints.push(constraint);
                else pkg.constraints = [constraint];
            }
            return pkg;
        })
    }
    console.log(`[${packageName}] fetching dependencies`);
    let dependecies = null;
    try {
        let pkg = (await Repo.getPackage(packageName));
        dependecies = pkg.depends || []; 
    } catch (error) { throw `Failed to get package ${packageName}: ` + error };
    //console.log(dependecies)
    trace.push(packageName);
    for (let i = 0; i < dependecies.length; i++) {
        let dep = dependecies[i].packageName;
        let depconstraint = dependecies[i].constraint;
        try {
            toInstall = await parseDep(dep, toInstall, trace, depconstraint);
        } catch (error) {
            if (error.circularDependency) {
                let packageWhoThrowed = error.circularDependency
                if (dep != packageWhoThrowed)
                    throw error;
                else {
                    if (depconstraint)
                        toInstall.push({ packageName: dep, constraints: [depconstraint] })
                    else
                        toInstall.push({ packageName: dep })
                    console.log(`[${dep}]Fixed circular dependency`);
                }
            } else throw error;
        }
    }
    trace.splice(trace.length - 1, 1);

    if (constraint)
        toInstall.push({ packageName: packageName, constraints: [constraint] });
    else
        toInstall.push({ packageName: packageName });
    console.log(`[${packageName}] done!`);
    return toInstall;
}

function resolveVersions(packageList) {
    console.log(JSON.stringify(packageList));
    return packageList
        .map(package => {
            let packageName = package.packageName;
            let constraints = package.constraints || [];
            let lowerInclusive = '0';
            let upperInclusive = 'z';
            constraints = constraints.filter(constr => constr != null);
            console.log(constraints);
            constraints.forEach(constraint => {
                switch (constraint.operator) {
                    case "=":
                    case "==":
                        if (lowerInclusive > constraint.version || upperInclusive < constraint.version)
                            throw `[${packageName}] Cannot resolve`;
                        lowerInclusive = constraint.version;
                        upperInclusive = constraint.version;
                        break;
                    case ">=":
                        if (constraint.version > upperInclusive)
                            throw `[${packageName}] Cannot resolve`;
                        lowerInclusive = constraint.version;
                        break;
                    case "<=":
                        if (constraint.version < lowerInclusive)
                            throw `[${packageName}] Cannot resolve`;
                        upperInclusive = constraint.version;
                        break;
                    case "<<":
                        let versions = Repo.getPackageVersions(packageName);
                        // check if version available among options
                        let index = -1;
                        versions.forEach(ver => {
                            if (ver.startsWith(constraint.version)) {
                                index = versions.indexOf(ver);
                            }
                        });
                        // if not, throw
                        if ((index == -1) || (index == version.length - 1)) {
                            throw `[${packageName}] Cannot resolve`;
                        } else {
                            // else, get latest version smaller than current
                            upperInclusive = versions[index + 1];
                        }
                        break;
                    case ">>":
                        versions = Repo.getPackageVersions(packageName);
                        // check if version available among options
                        index = -1;
                        versions.forEach(ver => {
                            if (ver.startsWith(constraint.version)) {
                                index = versions.indexOf(ver);
                            }
                        });
                        // if not, throw
                        if ((index == -1) || (index == 0)) {
                            throw `[${packageName}] Cannot resolve`;
                        } else {
                            // else, get earliest version bigger than current
                            lowerInclusive = versions[index - 1];
                        }
                        break;
                    default:
                        console.log(constraint.operator); 
                        throw "Not implemented";
                }
            });
            if (upperInclusive == 'z')
                return { packageName: packageName};
            else
                return { packageName: packageName, version: upperInclusive };
        });
}

module.exports = async (packageName) => resolveVersions(await parseDep(packageName));
//module.exports = async (packageName) => await parseDep(packageName);