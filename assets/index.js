const path = require('path');

const myFileName = __filename;
console.log(__filename);

// console.log(__filename);
// console.log(__dirname);

// console.log('filename with extantion', path.basename(myFileName));
// console.log('fullpath for dirname', path.dirname(myFileName));
// console.log('extantion', path.extname(myFileName));

// console.log('filename without extantion', path.basename(myFileName, '.js'));

const pathToTextFile = path.resolve(__dirname, 'text.txt');
console.log(pathToTextFile);