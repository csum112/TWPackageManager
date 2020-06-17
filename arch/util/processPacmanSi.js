const regexes = [
    {
        regexp: /Name\ +: (.*?)\n/s,
        key: "packageName"
    },
    {
        regexp: /Version\ +: (.*?)\n/s,
        key: "version"
    },
    {
        regexp: /Packager\ +: (.*?)\n/s,
        key: "maintainer"
    },
    {
        regexp: /Depends On\ +: (.*?)\n/s,
        key: "depends"
    },
    {
        regexp: /Description\ +: (.*?)\n/s,
        key: "description"
    }
];
function regexpGetGroup(block, regexp) {
    let matched = regexp.exec(block);
    if (!matched) throw (`Not found regexp ${regexp}`);
    return matched[1]
}

const preProcessAptShow = (package => {
    let pkg = {}
    let info = regexes.map(regexGroup => {
        return {
            key: regexGroup.key,
            value: regexpGetGroup(package, regexGroup.regexp)
        }
    });
    info.forEach((field => {
        if (field.key == 'depends') {
            let depsArray = field.value.split('  ');
            console.log(depsArray);
            depsArray = depsArray.map(dep => {
                return {
                    packageName: dep,
                    constraint: {
                        operator: '==',
                        version: 'latest'
                    }
                }
            });
            console.log(depsArray);
            pkg[field.key] = JSON.parse(JSON.stringify(depsArray));
        } else {
            pkg[field.key] = field.value;
        }
    }));
    return pkg;
});

module.exports = preProcessAptShow;
