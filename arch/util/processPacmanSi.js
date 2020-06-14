const regexes = [
    {
        regexp: /Name            : (.*?)\n/s,
        key: "packageName"
    },
    {
        regexp: /Version         : (.*?)\n/s,
        key: "version"
    },
    {
        regexp: /Description     : (.*?)\n/s,
        key: "description"
    },
    {
        regexp: /Packager        : (.*?)\n/s,
        key: "maintainer"
    },
    {
        regexp: /Depends On      : (.*?)\n/s,
        key: "depends"
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
        pkg[field.key] = field.value;
    }));
    return pkg;
});

module.exports = preProcessAptShow;
