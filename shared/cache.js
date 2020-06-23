const NC = require('node-cache');
const MongoClient = require('mongodb').MongoClient;

const packageDetailsCache = new NC();
const packageListCache = new NC();
const mongoClient = new MongoClient(process.env.CONNECTION_STRING, { useUnifiedTopology: true });
const DBNAME = process.env.DBNAME
const REPONAME = process.env.REPONAME;
const TTL = 0;

async function getMongo(key) {
    let collection = mongoClient.db(DBNAME).collection(REPONAME);
    let res = await collection.find({ docKey: key }).toArray();
    if (res.length == 0) return null;
    else {
        let data = res[0].data;
        return data;
    }
}
function saveMongo(key, data) {
    let collection = mongoClient.db(DBNAME).collection(REPONAME);
    let toSave = {
        docKey: key,
        data: data
    }
    collection.insertOne(toSave);
}


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
    }
    else {
        let mongoKey = `${type}_${key}`;
        let mongoCache = await getMongo(mongoKey);
        if (mongoCache) return mongoCache;
        else {
            let result = await fallback(key);
            cache.set(key, result, TTL);
            await saveMongo(mongoKey, result);
            return result;
        }
    }
}

module.exports = {getCacheOrCompute, mongoClient};