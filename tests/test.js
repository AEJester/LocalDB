let LocalDB = require("../index");

LocalDB.init();
LocalDB.create("names");
LocalDB.store("name", "Ryan", "names");