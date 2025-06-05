const fs = require('fs/promises');

async function readTextFile(pathToTextFile) {
    try {
        const data = await fs.readFile(pathToTextFile, 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { readTextFile };