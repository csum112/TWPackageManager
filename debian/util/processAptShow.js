const regexes = [
    {
        regexp: /Package: (.*?)\n/s,
        key: "packageName"
    },
    {
        regexp: /Version: (.*?)\n/s,
        key: "version"
    },
    {
        regexp: /Maintainer: (.*?)\n/s,
        key: "maintainter"
    },
    {
        regexp: /Depends: (.*?)\n/s,
        key: "depends"
    },
    {
        regexp: /Description: (.*?)\n/s,
        key: "descriptions"
    }
];

function replaceNewLine(blockOfText) {
    return blockOfText.replace(/\n/g, "#ENDLINE#")
}

function restoreNewLine(blockOfText) {
    return blockOfText.replace(/#ENDLINE#/g, "\n")
}

function splitPackages(blockOfText) {
    return Array.from(replaceNewLine(blockOfText).matchAll(/(Package: .*?#ENDLINE##ENDLINE#)/g))
        .map(match => restoreNewLine(match[1]));
}

function regexpGetGroup(block, regexp) {
    let matched = regexp.exec(block);
    if (!matched) {
        return '';
    };
    return matched[1];
}

function depToDTO(dep) {
    dep = dep.trim();
    dep = dep.replace('(', '');
    dep = dep.replace(')', '');
    let arr = dep.split(' ');
    return {
        packageName: arr[0],
        constraint: {
            operator: arr[1],
            version: arr[2]
        }
    }
}

const preProcessAptShow = (blockOfText => {
    return splitPackages(blockOfText)
        .map(package => {
            let pkg = {}
            let info = regexes.map(regexGroup => {
                return {
                    key: regexGroup.key,
                    value: regexpGetGroup(package, regexGroup.regexp)
                }
            });
            info.forEach((field => {
                if (field.key == 'depends') {
                    let depsArray = field.value.split(', ');
                    depsArray = depsArray.map(dep => {
                        if (!dep.includes('|'))
                            return depToDTO(dep);
                        else {
                            return dep.split('|').map(depToDTO);
                        }
                    });
                    pkg[field.key] = JSON.parse(JSON.stringify(depsArray));
                } else {
                    pkg[field.key] = field.value;
                }
            }));

            return pkg;
        });
});

module.exports = preProcessAptShow;
