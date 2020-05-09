//Arrays hold multiple pieces of information

var array = [1, 2, 3];
var array2 = [1, "one"];
var array3 = [[1, "one"],[2,"two"]];

//Use bracketed numbers to pull a piece of data from an array

var firstEntry = array[0];
array[0] = 5;
//Arrays are mutable so you can change an individual value.

multiArray = [[1,2,3],[4,5,6],[7,8,9]];
//The following gets the first sub-array
firstSubarray = multiArray[0];
//The following gets the third entry in the first sub-array
thirdEntry = multiArray[0][2];

//push() appends an entry to the back of an array
array.push(4);

//pop() removes an entry at the back of an array and returns the removed value
var lastEntry = array.pop();
//The above removes the last number from array and assigns it to a new variable

//shift() removes an entry at the front of an array and returns the removed value
var fistEntry = array.shift();

//unshift() adds an entry to the front of an array
array.unshift(0);