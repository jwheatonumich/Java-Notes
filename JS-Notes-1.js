var myVar = 10;

 

//++ can be used to increment a variable

myVar++;

 

//-- can be used to decrement a variable

myVar--;

 

//% gives the remainder of a division problem. 5%2 = 1 because the remainder is 1.

remainder=5%2;

 

//+= is used to add an amount and assign to a variable in a single step

myVar += 5;

myVar -= 5;

myVar *= 5;

myVar /= 5;

 

// Use backslash \" or \' symbols to include quotes in a string

 

var text = "James said \"Hello!\"";

 

//Backslash can also be used to print backslash (\\), a new line (\n), a carriage return (\r), a tab (\t), a word boundary (\b), or a form feed (\f)

 

var twoLineText = "First Line \r Second Line";

 

// + is used to concatenate text

var twoStrings = "James " + "Heaton";

 

// += can concatenate to the end of an existing string

twoStrings += " is cool.";

 

// + can be used to add a variable in the middle of text

var sentence = "My name is " + twoStrings +" and I am cool."

 

//Add .length after a string to get its length

sentence.length;

 

//Brackets [] will return the character of a string

var firstCharacter = twoStrings[0];

//You can't change an individual character in a string, they are immutable. For example you cant say twoStrings[0] = "A"

 

//Find the last character in a string

var lastCharacter = twoStrings[twoStrings.length - 1];