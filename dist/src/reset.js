const fs = require("fs");

const reset = () => {
    let items = fs.readdirSync("./database/");
    let finalized = [];
    for (let i = 0; i < items.length; i++) {
        fs.unlinkSync(`./database/${database}`);
        console.log("Deleted: "+database.replace(".json", ""));
    }
    console.log("Reset database folder.");
}
module.exports = reset;