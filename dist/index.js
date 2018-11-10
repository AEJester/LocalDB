const create = require("./src/create");
const store = require("./src/store");
const init = require("./src/init");
const get = require("./src/get");
const remove = require("./src/remove");

const lib = {
    create: create,
    store: store,
    init: init,
    get: get,
    remove: remove
};

module.exports = lib;