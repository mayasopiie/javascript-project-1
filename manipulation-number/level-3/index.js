//Storing some of numbers into array
let my_array = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];

//Combine, push, or pop different kind of data types like a string and boolean to that array variable

my_array.push("Aku bukan angka");
my_array.push(true);
my_array.push("Aku juga bukan");
my_array.push(false);
my_array.pop();
let join_array = my_array.join(" | ");
console.log(join_array);

//Loop through the numbers or items in the array, then log them to the console
let i = 0;
for (i = 0; i < my_array.length; i++){
    console.log(my_array[i]);
}