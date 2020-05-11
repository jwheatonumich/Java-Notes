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

//Switch statements can be used instead of nested if statements. 
//Each statement needs a break or else it will execute them all if possible
function multiTest(val){
    switch(val){
        case 1:
        return "one";
        break;
        case 2:
        return "two"
        break;
        default:
        return "Not one or two"
        break;
    }
}

//Omitting breaks can be used to give multiple cases the same output
function multiTest2(val){
    switch(val){
        case 1:
        case 2:
        return "one or two"
        break;
        default:
        return "Not one or two"
        break;
    }
}

//A boolean statement returns true of false, so no need to add a return line
function isEqual(a,b) {
    return a === b;
  }

  //Function to count face cards played and decide whether to bet or hold
  var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:case 3:case 4:case 5:case 6:
    count +=1;
    break;
    case 10:case "J":case "Q":case "K":case "A":
    count -=1;
    break;
  }
  if(count>0){
    return count + " Bet"
  }
  else{
    return count + " Hold"
  }
};

//A conditional operator is a special 1-line way to write simple if statements
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
};

//Conditional operators can be chained together
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
};