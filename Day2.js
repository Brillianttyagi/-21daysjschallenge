/*Day 2
array Methods
*/
//Declaring array
var arr = ["John","Refah","Elon","Rahul"]; //1st Method

console.log(arr)

var namearr = new Array("Refah","Elon","Rahul"); //2nd Method

console.log(namearr);

//Important Array Methods
//1st .concat()
//It returns a new array object that contains two or more merged arrays.
var arr2 = arr.concat(namearr);  //merged arrays.
console.log(arr2);
//2nd .find()
/*It returns the value of the first element in the given array that 
satisfies the specified condition.
*/
var name = arr.find(x=>x=="Rahul");
console.log(name);
//3 .findIndex()
/*It returns the index value of the first element in the 
given array that satisfies the specified condition
*/
var index = arr.findIndex(x=>x=="Rahul");
console.log(index);
//4 .forEach()
/*It invokes the provided function once for each element of an array.
*/
arr.forEach(function(fetch) {  
  console.log(fetch);  
}); 
arr.forEach(x=>console.log(x));
//5 .map()
/*It calls the specified function for every array element and returns 
the new array*/
var result = arr.map(x=>x+" male");
console.log(result);
//6 .sort()
/*	It returns the element of the given array in a sorted 
order.*/
var arr3 = [1,3,2,1];
var newarr = arr3.sort((a,b)=>a-b);
console.log(newarr);
//7 .push()
/*The push()method adds an element to the end of the array and
 returns the length of the array.*/
 arr.push("Ram");
 arr.push("Atul");
 console.log(arr);
 //8 .unshift()
 /*The unshift()method adds an element to the start of the array 
 and also returns the new length of the array.*/
 console.log(arr.unshift("Arun"));
 //9 .shift()
 /*The shift()method removes the first element from the array and
  returns the element. Remember that using the shift method will 
  change the length of the array.*/
  console.log(arr.shift());
  //9 .pop()
  /*The pop()method removes the last element from the given array
   and returns the element. Remember that using the pop method will
    also change the length of the given array.*/
    console.log(arr.pop());
