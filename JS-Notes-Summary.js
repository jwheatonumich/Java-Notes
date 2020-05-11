/*Basic Javascript */

//Add .length after a string to get its length
sentence.length;

/*Arrays*/

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

/*Functions*/

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

//A conditional operator is a special 1-line way to write simple if statements
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
  }

//Conditional operators can be chained together
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

//Switch statements can be used instead of nested if statements. 
//Each statement needs a break or else it will execute them all if possible
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

/*Objects*/

//Objects store data
var cat = {
    "name": "Whiskers",
    "number legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

//Dot notation . or bracket notation [] can extract data from an object
var catName = cat.name;
var catLegs = cat["number legs"]; //Bracket notation is useful when an attribute has a space

//Bracket notation can use variables to extract data from an object
var lookup = "enemies";
catEnemies = cat[lookup];
//*BRACKET NOTATION CAN BE USED FOR VARIABLES*

//Updating a property in an object
cat.name = "Fred";

//Adding a new property
cat.sound = "Meow";

//Delete a property
delete cat.tails;

//.hasOwnProperty will test whether an object has a given property
cat.hasOwnProperty("wings");