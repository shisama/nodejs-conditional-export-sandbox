(async() => {
  const package3 = await import("package3");
  console.log(package3.foo);
  const { foo } = require("package4");
  console.log(foo);
})();