//Math.random() generates a random number between [0 and 1)
Math.random();

//Math.floor will output the closest integer below a number
Math.floor(1.9);

//Random number between 0 and 19 because we round down
Math.floor(Math.random() * 20);

//Return a random whole number between 10 and 20
Math.floor(Math.random() * (20 - 10 + 1)) + 10;

//parseInt() turns a string into an integer

//Parse "007" as the number 7
var a = parseInt("007");

//The second input to parseInt() specifies the base of the input (radix)

//Parse "11" as a binary number (3)
var a = parseInt("11", 2);