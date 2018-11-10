const fs = require("fs");

const init = () => {
    if (!fs.existsSync("./tables")){
        fs.mkdirSync("./tables");
    }
}

module.exports = init;