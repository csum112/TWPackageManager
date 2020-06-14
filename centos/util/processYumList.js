const regex = /^"(.*?) +.+? +.+"$/g

const getPackagesFromList = (textBlock) => {
    return textBlock
        .split('\n')
        .map(line => {
            console.log(line);
            return JSON.stringify(line)
        })
        .filter(line => line && regex.test)
        .map(line => {
            let match = regex.exec(line);
            return match;
        })
        .filter(match => match)
        .map(match => match[1]);
}

module.exports = getPackagesFromList