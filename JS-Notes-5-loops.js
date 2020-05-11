//While loops repeat while a condition is true
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//For loops repeat a specific number of times
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

//Iterate through an array and sum all the entries
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i=0; i<myArr.length; i++){
  total+=myArr[i];
}

//Iterate through a 2-dimensional array and multiply all the values
function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
          product *= arr[i][j];
      }
    }
    return product;
  }
  multiplyAll([[1,2],[3,4],[5,6,7]]);

//Do...While loops will execute the loop at least once even if the while is false
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

//Sometimes we can use recursion instead of a loop.
//Recursion involves calling a function inside of itself
//The below function multiplies all values in an array together using recursion
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
      //Base case if there are no remaining values in the array
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
      //Multiply the first value of the array times the array minus the first value
    }
  }