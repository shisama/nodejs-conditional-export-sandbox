import { createRequire } from 'module';
import { foo } from "package1";
import { bar } from "package2";
import { feature1Fn } from "package2/feature1";

const require = createRequire(import.meta.url);

console.log(foo);
console.log(require("package1").foo);
console.log(bar);
feature1Fn();

/** results */
// package1/import.mjs
// package1/require.js
// package1/main/import.js
// package2/feature1/import.js