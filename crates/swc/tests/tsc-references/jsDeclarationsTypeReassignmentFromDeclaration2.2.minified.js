//// [some-mod.d.ts]
//! 
//!   x Export assignment cannot be used when targeting ECMAScript modules. Consider using `export default` or another module format instead.
//!    ,----
//!  5 | export = getItems;
//!    : ^^^^^^^^^^^^^^^^^^
//!    `----
//// [index.js]
var items = require("./some-mod")();
module.exports = items;
