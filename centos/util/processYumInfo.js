const regexes = [
    {
        regexp: /Name\ +: (.*?)\n/s,
        key: "packageName"
    },
    // {
    //     regexp: /Arch\ +: (.*?)\n/s,
    //     key: "arch"
    // },
    {
        regexp: /Version\ +: (.*?)\n/s,
        key: "version"
    },
    // {
    //     regexp: /Release\ +: (.*?)\n/s,
    //     key: "release"
    // },
    {
        regexp: /URL\ +: (.*?)\n/s,
        key: "maintainer"
    },
    {
        regexp: /Summary/s,
        key: "depends"
    },
    {
        regexp: /Summary\ +: (.*?)\n/s,
        key: "description"
    }
];

function replaceNewLine(blockOfText) {
    return blockOfText.replace(/\n/g, "#ENDLINE#")
}

function restoreNewLine(blockOfText) {
    return blockOfText.replace(/#ENDLINE#/g, "\n")
}

function splitPackages(blockOfText) {
    return Array.from(replaceNewLine(blockOfText).matchAll(/(Name[ ]{1,}: .*?#ENDLINE##ENDLINE#)/g))
        .map(match => restoreNewLine(match[1]));
}

function regexpGetGroup(block, regexp) {
    let matched = regexp.exec(block);
    if (!matched) {
        return '';
    };
    return matched[1];
}

function nthIndex(str, pat, n){
    var L= str.length, i= -1;
    while(n-- && i++<L){
        i= str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}

const preProcessAptShow = (blockOfText => {
    //console.log(blockOfText);
    if ((blockOfText[0].match(/Name\ +:/g) || []).length > 1) {
        redundant = true;
        blockOfText[0] = blockOfText[0].slice(0, blockOfText[0].indexOf('Available'));
        blockOfText[1] = blockOfText[1].slice(0, nthIndex(blockOfText[1], 'package', 2));
    }
    //console.log(blockOfText);

    return splitPackages(blockOfText[0])
        .map(package => {
            let pkg = {}
            let info = regexes.map(regexGroup => {
                return {
                    key: regexGroup.key,
                    value: regexpGetGroup(package, regexGroup.regexp)
                }
            });
            info.forEach((field => {
                pkg[field.key] = field.value;
            }));

            // jump over the beginning 3-4 lines
            blockOfText[1] = blockOfText[1].slice(
                blockOfText[1].indexOf('dependency: ')
            );

            // split into an array
            blockOfText[1] = blockOfText[1].replace(/\n/g, '');
            blockOfText[1] = blockOfText[1].replace(/dependency/g, ',dependency');
            let depsArray = blockOfText[1].split(',');
            depsArray.splice(0, 1);

            // extract just the core packages and sort them out to eliminare redundancy
            depsArray = depsArray.map(dep => dep.slice(dep.indexOf('provider')));
            //console.log(depsArray);
            let simpleDepsArray = [];
            depsArray.forEach(dep => {
                let arr = dep.split(/[ ]{2,}/);
                arr.forEach(innerDep => {
                    if (!simpleDepsArray.includes(innerDep)) {
                        simpleDepsArray.push(innerDep);
                    }
                });
            });
            simpleDepsArray.splice(simpleDepsArray.indexOf(''), 1);
            //console.log(simpleDepsArray);

            simpleDepsArray = simpleDepsArray.map(dep => {
                dep = dep.replace(/provider: /g, '');
                let arr = dep.split(' ');
                let pkgName = /(.+?)\..*/g.exec(arr[0])[1];
                let version = /(.+?:)?(.+?)-.*/g.exec(arr[1])[2];
                return {
                    packageName: pkgName,
                    constraint: {
                        operator: '==',
                        version: version
                    }
                }
            });

            pkg['depends'] = simpleDepsArray.filter(el => 
                simpleDepsArray.find(el1 => JSON.stringify(el1) === JSON.stringify(el)) === el
                );

            return pkg;
        })[0];
});

module.exports = preProcessAptShow;
