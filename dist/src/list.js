const fs = require("fs");

const list = () => {
    let items = fs.readdirSync("./database/");
    return items;
}

module.exports = list;