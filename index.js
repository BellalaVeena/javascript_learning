
//Problem: in below example we are repearing the numbers of line which are same in both functions
// to reslove this we are using Higher order functions

function filterEven(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }


  function filterOdd(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }


  // solution
function filterFunction(arr, funcTocall) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        funcTocall(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;  
  }

let a = [1,22,34,5]
filterFunction(a,isOdd)

function isEven(element){
    return element % 2 == 0
}

function isOdd(element){
    return element % 2 !== 0
}



// //Return the function


function calculate(operation) {
    switch (operation) {
      case "ADD":
        return function (a, b) {
          console.log(`${a} + ${b} = ${a + b}`);
        };
      case "SUBTRACT":
        return function (a, b) {
          console.log(`${a} - ${b} = ${a - b}`);
        };
    }
  }

  let recivedFunction = calculate("ADD")
  recivedFunction(3,5)

//Double paranthesis
//calculate("ADD")(3,5)
// Example for Higher order functions:map,resuce,filter,find

//  for()  intilization:condition:incremenet/decreament
//  for in  we can use this loop only the objects
//  for each
//  for of 
//  while
//  do while
let obj = {
    name:"veena", //i = key,obj[i]=value, if iterationg through obj then kets will act as index
    school:"abc"
}

 for(let i in obj){
     console.log(Object.values(obj))
 }
let arr = ["a","b","c"]
 for(let i of arr){ 
    console.log(i) //a,b,c
 }

//  while(condition){
//      // logic 
//  }

//  do{
//     //logic
//  }
// while(condition)  //the logic will get excetued atleast once if condition is false


let arr = [1,2,3,4,5]
    // arr.forEach((ele,index)=>arr[index]=ele*ele)     

let eveanMap = arr.map((item)=> item % 2 == 0)
console.log("Map",eveanMap)

let even = arr.filter(item => item % 2 == 0)
console.log("filter",even)

let findEven = arr.find(item => item % 2 == 0)
console.log("find",findEven)
