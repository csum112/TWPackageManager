const NC = require('node-cache');
const packageDetailsCache = new NC();
const packageListCache = new NC();
const TTL = 0;

const getCacheOrCompute = async (key, fallback, type) => {
    let cache = null;
    switch (type) {
        case "PACKAGE_LIST":
            cache = packageListCache;
            break;
        case "PACKAGE_DETAILS":
            cache = packageDetailsCache;
            break;
        default:
            throw "Invalid cache type";
    }
    
    if (cache.has(key)) {
        return cache.get(key);
    } else {
        let result = await fallback(key);
        cache.set(key, result, TTL);
        return result;
    }
}

module.exports = getCacheOrCompute;