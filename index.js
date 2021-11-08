"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/2";
axios_1["default"].get(url).then(function (res) {
  console.log(res.data);
});
// The first way:
//in order to compile ts file, go to terminal, then <tsc index.ts>
// after index.js showing up, run <node index.js> in the terminal

// The second way : combine 2 commands together
// <ts-node index.ts>
