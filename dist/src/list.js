const fs = require("fs");

const list = () => {
    let items = fs.readdirSync("./database/");
    let finalized = [];
    for (let i = 0; i < items.length; i++) {
        finalized.push(items[i].replace(".json", ""));
    }
    return finalized;
}

module.exports = list;