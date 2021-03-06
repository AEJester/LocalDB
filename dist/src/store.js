const fs = require("fs");
/**
 * 
 * @param {string} key - The name given to the value
 * @param {string} value - The value stored under the key
 * @param {string} database - The database to retrieve the information from
 */
const store = (key, value, database) => {
    let raw_data;
    raw_data = fs.readFileSync(`./database/${database}.json`, "utf8");
    let data = JSON.parse(raw_data);
    let tf = false;
    let pair = 0;
    for (let i = 0; i < data.pairs.length; i++) {
        if (key == data.pairs[i].key) {
            tf = true;
            pair = i;
        }
    }
    if (tf == true) {
        let raw_data;
        raw_data = fs.readFileSync(`./database/${database}.json`, "utf8");
        let data = JSON.parse(raw_data);
        data.pairs[pair].value = value;
        let new_data = JSON.stringify(data);
        fs.writeFileSync(`./database/${database}.json`, new_data);
    } else {
        if (key.toLowerCase() == "default") {
            throw new Error("You cannot have a key with the name default, as it interferes with the default value");
        }
        let raw_data;
        raw_data = fs.readFileSync(`./database/${database}.json`, "utf8");
        let data = JSON.parse(raw_data);
        data.pairs.push({key:key,value:value});
        let new_data = JSON.stringify(data);
        fs.writeFileSync(`./database/${database}.json`, new_data);
    }
}

module.exports = store;