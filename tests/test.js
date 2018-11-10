let datachest = require("../dist/index");

let x = datachest.search("name", ["passwords", "usernames"]);
console.log(x);