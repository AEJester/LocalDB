const fs = require("fs");

const backup = (name="backup") => {
    var date = new Date();
    if (!fs.existsSync("./backups/")) {
        fs.mkdirSync("./backups/");
    }
    let x = `./backups/${date.getMonth()+1}-${date.getUTCDate()-1}-${date.getFullYear()}-${name}`
    if (!fs.existsSync(x)) {
        fs.mkdirSync(x);
    }
    let items = fs.readdirSync("./database/");
    let finalized = [];
    for (let i = 0; i < items.length; i++) {
        fs.copyFileSync("./database/"+items[i], `${x}/${items[i]}`);
        console.log("Created backup of "+items[i].replace(".json", ""));
    }
    
}

module.exports = backup;