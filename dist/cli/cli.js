#!/usr/bin/env node
const program = require("commander");

const create = require("../src/create");
const store = require("../src/store");
const init = require("../src/init");
const get = require("../src/get");

program
.version(require("../package.json").version)
.description("A CLI that allows you manipulate data-chest databases and data.")

program
.command("create <name>")
.description("Create a database with the given name.")
.alias("cr")
.action((name) => {
    create(name);
});

program
.command("store <key> <value> <database>")
.description("Store a value in the specific database.")
.alias("st")
.action((key, value, database) => {
    store(key, value, database);
});

program
.command("init")
.description("Initializes the project with a database folder.")
.alias("i")
.action(() => {
    init();
});

program
.command("get <key> <database>")
.option("-n, --nonexistant [value]", "Value to return if there is no tag matching the given key. Defaults to \"0\".")
.description("Gets the value from a key in the given database.")
.action((key, database, cmd) => {
    if (cmd.nonexistant) {
        console.log(get(key, database, cmd.nonexistant));
    } else {
        console.log(get(key, database));
    }
});

program.parse(process.argv);