
//Day 8 
/*Valid Data Types
In JSON, values must be one of the following data types:

a string
a number
an object (JSON object)
an array
a boolean
null
*/
//JSON.parse()
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

//JSON.stringify()
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);

//JASON Objects
myObj = { "name":"John", "age":30, "car":null };
x = myObj["name"];

//JASON Arrays
//Arrays as JSON Objects
{}
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
}

//Accessing Array Values
x = myObj.cars[0];
