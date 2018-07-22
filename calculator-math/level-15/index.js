//--- 1. Function of addition
function add(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

//--- 2. Function of substraction
function substract(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous - current;
    });
}

//--- 3. Function of multiplication
function multiply(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous * current;
    });
}

//--- 4. Function of division
function divide(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous / current;
    });
}

//--- 5. Function of modulation
function modulo(number, divider) {
    return number % divider;
}

//--- 6. Function of square
function square(number) {
    return number * number;
}

console.log("Output of addition function");
console.log(add(1, 2, 3, 4));
console.log("---");

console.log("Output of substraction function");
console.log(substract(34, 4));
console.log("---");

console.log("Output of multiplication function");
console.log(multiply(2, 7));
console.log("---");

console.log("Output of division function");
console.log(divide(42, 7));
console.log("---");

console.log("Output of modulation function");
console.log(modulo(20, 6));
console.log("---");

console.log("Output of square function");
console.log(square(5));
console.log("---");