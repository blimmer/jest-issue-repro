const os = require("os");

const numberOfCpus =
  typeof os.availableParallelism === "function"
    ? os.availableParallelism()
    : os.cpus().length;

console.log(`Number of CPUs: ${numberOfCpus}`);
console.log(`Is available parallelism available?: ${typeof os.availableParallelism === "function"}`)
