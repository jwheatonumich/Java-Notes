//Below creates a function to pring Hello World
function helloWorld() {
    console.log("Hello World");
  }

//Below function adds the two inputs and then prints
function addition(param1, param2){
    console.log(param1 + param2)
  }

//Variables and parameters (inputs) declared in functions are local to that function
//If there are both local and global variables with the same name, local takes precedence

//The below function will add 2 to the input even though the global variable is 1
var numVar = 1;
function adder(input){
    var numVar = 2;
    console.log(input + numVar);
};

//Return passes a value out of a function
function adder2(input){
    return input + 1;
};

//Functions without a return with return undefined

//The below code adds to a global variable and doesn't return anything
var count = 1;
function addCount(input){
    count+=input;
};

//The below statement uses an if statement to evaluate whether you input true

function test (myCondition) {
    if (myCondition) {
       return "It was true";
    }
    return "It was false";
  }

//The below statement checks if the input was equal to ten

  function equalityTest(myVal) {
    if (myVal == 10) {
       return "Equal";
    }
    return "Not Equal";
  };

//Using == will coerce text '2' to int 2. Using === will not coerce.

//The && symbols can be used to test if all of multiple conditions are true
  function testLogicalAnd(val) {
    if (val <=50 && val >=25) {
        return "Yes";
    };

//The || symbols can be used to test if any of multiple conditions are true
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  };

//Else tells the code what to do if the statement is not true
function testElse(val) {
    var result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    return result;
  };
