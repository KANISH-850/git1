const os= require('os');

let mem=os.totalmem();
let free=os.freemem();

console.log(`Total Memory: ${mem}`);
console.log(`Free Memory: ${free}`);