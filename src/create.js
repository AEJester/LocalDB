const fs = require("fs");
const create = (name) => {
    fs.open(`./tables/${name}.json`, "w", (err) => {
        if (err) throw err;
    });
    let content = {
        pairs: []
    }
    fs.writeFile(`./tables/${name}.json`, JSON.stringify(content), (err) => {
        if (err) throw err;
    });
}

module.exports = create;