const fs = require("fs");
/**
 * Initializes the tables directory. This is required at the beginning of every script.
 */
const init = () => {
    if (!fs.existsSync("./tables")){
        fs.mkdirSync("./tables");
    }
}

module.exports = init;