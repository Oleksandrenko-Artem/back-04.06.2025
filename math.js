function add(num1 = 8, num2 = 27) {
    return num1 + num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function sub(num1, num2) {
    return num1 - num2;
}

// console.log(add());
// console.log(mult(3, 4));

// console.log(module);

module.exports = { add, mult };