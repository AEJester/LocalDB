# data-chest
A package for storing values in key-value pairs for NodeJS applications.

# docs
Visit http://datachest.tk/ for the documentation of this.

# example

```js
let datachest = require("data-chest");

datachest.init(); //goes at start of program

datachest.create("names");
datachest.store("name", "Ryan", "names");
let x = datachest.get("name", "names", "Not there");
console.log(x);
//logs "Ryan"
```

# table
An example table can be found in the `tests/database` directory.
