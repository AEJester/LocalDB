const fs = require("fs");
/**
 * Creates a database.
 * @param {string} name - The name to give the new database
 */
const create = (name) => {
    fs.openSync(`./tables/${name}.json`, "w", (err) => {
        if (err) throw err;
    });
    let content = {
        pairs: [
            {
                "key": "default",
                "value": "0"
            }
        ]
    }
    fs.writeFileSync(`./tables/${name}.json`, JSON.stringify(content));
}

module.exports = create;