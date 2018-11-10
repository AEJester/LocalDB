let datachest = require("../npm/index");

datachest.init();
datachest.create("names");
datachest.store("name", "Ryan", "names");
let x = datachest.get("name", "names", "Not there");
console.log(x);
