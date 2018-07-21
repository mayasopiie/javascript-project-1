//--- Random number generator from 1 - 100
function random_number(){
    let number = Math.random() * 100;
    return number.toFixed(0);
}

//--- Small number comparisons function
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

//-- Big number comparison function
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

//--- Variables initialization
let a = random_number();
let b = random_number();
let c = random_number();
let d = random_number();


//--- Usage of functions
console.log("SMALL COMPARISON");

small_comparison(a, b, c, d);

console.log("...");
console.log("BIG COMPARISON");

big_comparison(a, b, c, d);
console.log("---");