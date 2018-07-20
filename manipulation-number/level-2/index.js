let a = 2;
let b = 5;
let c = 7;
let d = 11;
let e = 54;

const right = true;


a = a + "3"; //hasil "23"
b = b - "1"; //hasil 4
c = c * "Hello"; //hasil NaN (Not a number)
d = d / "Teddy Bear"; //hasil NaN (Not a number)
e = e * right; //hasil 54

console.log(a);
console.log(typeof(a));
console.log(b);
console.log(typeof(b));
console.log(c);
console.log(typeof(c));
console.log(d);
console.log(typeof(d));
console.log(e);
console.log(typeof(e));

const number = 100;
const minus = -7654;
const big_number = 9999999999999999999999999;

let f = number + (-7654);
let g = number * (-7654);
let h = number - (-7654);
let i = number / (-7654);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

let j = number + big_number;
let k = number - big_number;
let l = number * big_number;
let m = number / big_number;
console.log(j);
console.log(k);
console.log(l);
console.log(m);