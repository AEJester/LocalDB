const fs = require("fs");

const search = (key, datatases) => {
    if (typeof databases == "object") {

    } else if (typeof datatases == "string") {
        if (databases == "*") {
            let items = fs.readdirSync("./database/");
            for (let i = 0; i < items.length; i++) {
                console.log(itesm[i].replace(".json", ""));
            }
        } else {

        }
    } else {
        throw new Error("The database must be a string or an array of strings.");
    }
}

module.exports = search;