const create = require("./src/create");
const store = require("./src/store");
const init = require("./src/init");
const get = require("./src/get");
const remove = require("./src/remove");
const search = require("./src/search");
const list = require("./src/list");
const clear = require("./src/clear");
const clearTag = require("./src/cleartag");
const wipe = require("./src/wipe");
const backup = require("./src/backup");
const restore = require("./src/restore");
const reset = require("./src/reset");
const run = require("./src/lang-api/lang-run-query");

const lib = {
    create: create,
    store: store,
    init: init,
    get: get,
    remove: remove,
    search: search,
    list: list,
    clear: clear,
    clearTag: clearTag,
    wipe: wipe,
    backup: backup,
    restore: restore,
    reset: reset,
    run: run
};

module.exports = lib;
