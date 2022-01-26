// TODO: What are we importing? The File System module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// First argument is the file path and file name, second 
fs.appendFile('log.txt', `${process.argv[2]}\n`, err =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
