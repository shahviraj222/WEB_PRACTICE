const fs = require('fs');
const text = fs.readFileSync("msg","utf-8")
console.log("The content of the file is")
console.log(text);