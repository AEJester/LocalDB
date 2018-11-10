let datachest = require("../dist/index");

let x = datachest.search("name", ["passwords", "usernames", "emails"]);
console.log(x);