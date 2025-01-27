const fs = require('fs');

// The string value you want to write
const content = "Hello, this is the content I want to write to a file!";

// Write to a new file
fs.writeFileSync('output.txt', content);

console.log('File has been created successfully');
console.log("Hi");
const myVar = process.env.My_Variable;
console.log("Var is " + myVar);
