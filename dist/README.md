# data-chest
A package for storing values in key-value pairs for NodeJS applications.

# install
Do the followingcommand in console:
`npm i data-chest`
To get the CLI:
`npm i -g data-chest`

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

# cli
If you globally installed data-chest, you get access to a CLI.
Do:
`data-chest -h`
For help. You can also use the alias command `dc`.
Use:
`dc -h` 
if you do not feel like typing out the full name.

