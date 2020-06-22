const regex = /(\*| )+(.+?) 0/g;

const processVersions = (blockOfText) => {
    return blockOfText.split('\n')
        .map(line => {
            console.log(line);
            return regex.exec(line);
        })
        .filter(match => match)
        .map(match => match[2]);
};

module.exports = processVersions;