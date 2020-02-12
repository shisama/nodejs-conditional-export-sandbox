const { foo } = require("package1");
const { feature1Fn } = require("package2/feature1");

console.log(foo)

feature1Fn();

import("package1").then(({ foo }) => {
  console.log(foo);
});

/** results */
// package1/require.js
// package2/feature1/require.js
// package1/import.mjs