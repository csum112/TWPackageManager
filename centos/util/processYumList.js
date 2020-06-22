const regex = /^"(.*?)\..+? +(.*?:)?(.+?)-.+"$/g

const getPackagesFromList = (textBlock) => {
    return textBlock
        .split('\n')
        .map(JSON.stringify)
        .filter(line => line && regex.test)
        .map(line => {
            let match = regex.exec(line);
            return match;
        })
        .filter(match => match)
        .map(match => {
            return {
                packageName: match[1],
                version: match[3]
            }
        });
}

module.exports = getPackagesFromList