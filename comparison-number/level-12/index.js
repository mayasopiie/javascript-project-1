// Wrap those logics into some functions that can be called later
// Use parameters to enable us assign different kind of inputs to compare
// You need at least two parameters for these functions

function small_comparison(x, comparison_1, comparison_2, comparison_3){
    x < comparison_1 ?
    console.log(`${x} is smaller than ${comparison_1}`) :
    console.log(`${x} is not smaller than ${comparison_1}`);

    x < comparison_2 ?
    console.log(`${x} is smaller than ${comparison_2}`) :
    console.log(`${x} is not smaller than ${comparison_2}`);

    x < comparison_3 ?
    console.log(`${x} is smaller than ${comparison_3}`) :
    console.log(`${x} is not smaller than ${comparison_3}`);
}

function big_comparison(x, comparison_1, comparison_2, comparison_3){
    x > comparison_1 ?
    console.log(`${x} is bigger than ${comparison_1}`) :
    console.log(`${x} is not bigger than ${comparison_1}`);

    x > comparison_2 ?
    console.log(`${x} is bigger than ${comparison_2}`) :
    console.log(`${x} is not bigger than ${comparison_2}`);

    x > comparison_3 ?
    console.log(`${x} is bigger than ${comparison_3}`) :
    console.log(`${x} is not bigger than ${comparison_3}`);
}


let a = 8;
let b = 3;
let c = 15;
let d = 11;

//--- A BLOCK
console.log("'a' Block");
console.log("SMALL COMPARISON");

small_comparison(a, b, c, d);

console.log("...");
console.log("BIG COMPARISON");

big_comparison(a, b, c, d);
console.log("---");

//--- B BLOCK
console.log("'b' Block");
console.log("SMALL COMPARISON");

small_comparison(b, a, c, d);

console.log("...");
console.log("BIG COMPARISON");

big_comparison(b, a, c, d);
console.log("---");

//--- C BLOCK
console.log("'c' Block");
console.log("SMALL COMPARISON");

small_comparison(c, a, b, d);

console.log("...");
console.log("BIG COMPARISON");

big_comparison(c, a, b, d);
console.log("---");

//--- D BLOCK
console.log("'d' Block");
console.log("SMALL COMPARISON");

small_comparison(d, a, b, c);

console.log("...");
console.log("BIG COMPARISON");

big_comparison(d, a, b, c);
console.log("---");