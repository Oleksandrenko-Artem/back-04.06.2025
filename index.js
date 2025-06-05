// const math = require('./math');
// const message = require('./message');
// const grades = require('./grades');
// const countdown = require('./countdown');
// const path = require('path');
const fs = require('fs');

// console.log('hi!');

// const number1 = 8;
// const number2 = 27;

// console.log(math.add(number1, number2));
// console.log(message.sayHello());
// console.log(math);

// const myGrades = [9, 7, 12];
// console.log(grades.calcAverage(myGrades).toFixed(3));

// countdown.startCountDown(10);

// console.log(__filename);
// const pathToTextFile = path.resolve(__dirname, 'assets', 'text.txt');
// console.log(pathToTextFile);

// console.log(fs);
fs.readFile('./assets/text.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});