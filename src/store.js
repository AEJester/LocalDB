const fs = require("fs");
const store = (key, value, database) => {
    let raw_data;
    fs.readFile(`./tables/${database}.json`, "utf8", (err, dta) => {
        if (err) throw new Error("A Database with this name may not exist.\n\n"+err);
        raw_data = dta;
        let data = JSON.parse(raw_data);
        data.pairs.push({key:key,value:value});
        let new_data = JSON.stringify(data);
        fs.writeFile(`./tables/${database}.json`, new_data, (err) => {
            if (err) throw err;
        });
    });
}

module.exports = store;