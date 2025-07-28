// app.js
const path = require('path');

const filePath = path.join(__dirname, 'data', 'info.txt');
console.log("Full Path:", filePath);

console.log("Base Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
