let first_sentence = "This is my first sentence.";
let second_sentence = "I am the next sentence.";
let third_sentence = "Me too, a short sentence.";

let first_concat = first_sentence + " " + second_sentence;
let second_concat = `${first_sentence} ${second_sentence} ${third_sentence}`;

console.log(first_concat);
console.log(second_concat);