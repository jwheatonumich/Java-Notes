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

//Updating a property in an object
cat.name = "Fred";

//Adding a new property
cat.sound = "Meow";

//Delete a property
delete cat.tails;

//Objects can be used as references to lookup values
function phoneticLookup(val) {
    var result = "";
    var lookup = {
      alpha:"Adams",
      bravo:"Boston",
      charlie:"Chicago",
      delta:"Denver",
      echo:"Easy",
      foxtrot:"Frank"
    };
    result = lookup[val];
    return result;
  }

//.hasOwnProperty will test whether an object has a given property
cat.hasOwnProperty("wings");

//An array can hold multiple objects
var animals = [
    {type:"cat",name:"Fluffy"}
    ,
    {type:"dog",name:"Fido"}
];
var animal1 = animals[1]["type"];