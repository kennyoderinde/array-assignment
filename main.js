

//EXERCISE 1

//Write a function called extractKey which accepts two parameters, an array of objects, and the name 
//of a key and returns an array with just the values for that key.


var objArray =[{name: "Elie", isInstructor:true},
                {name: "Tim", isInstructor:true},
                {name: "Matt", isInstructor:true}]

function extractKeys(array, key){
    return objArray.reduce((acc, objArray) => {
        return  acc.concat(objArray[key])
    }, [])
}
console.log(extractKeys(objArray, "name"))


//EXERCISE 2

//Write a function called filterLetters which accepts an array of letters and returns the number of 
//occurrences of a specific letter. This function should be case insensitive

function filterLetters(arr,letters){
  let count = 0
  arr.filter(x => {
     if(x.toLowerCase() == letters.toLowerCase()){
    count++
  }
})
return count
}
console.log(filterLetters(["a","a","b","c","A"], "a"))

console.log(filterLetters(["a","a","b","c","A"], "B"))

console.log(filterLetters(["a","a","b","c","A"], "Z"))


// returns 1



//EXERCISE 3

//Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new 
//string with the first character and the last character of each value.
//printFirstAndLast(['awesome','example','of','forEach'])

function printFirstAndLast (arr) {
  
  var newString = '';
  
  arr.forEach ( function (val) {
    var newVal = val[val.length-1];
    newString = val[0] + newVal;
    console.log(newString);
  });
}
printFirstAndLast(['awesome','example','of','forEach']); 

// ae
// ee
// of
// fh




//  EXERCISE 4

//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with 
//each value multiplied by the index it is at in the array:

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);

});
function valTimesIndex (arr) {
  var newArray =[];   
  
  arr.forEach ( function (val, index, array) {
    newArray.push(val* index);
  });
  
  return newArray;
}
console.log(valTimesIndex([1,2,3,4])); //[8,6,4,2]
  
  //OR

function valTimesIndex(arr){

  const newArray = [];
arr.map((value, index, array) =>{
  newArray.push(value * index)

});
return newArray
}
console.log(valTimesIndex([1,2,3, 4]))

//EXERCISE 5
//Write a function called addKeyAndValue which accepts three parameters, 
//an array (of objects), a key and a value. This function should 
//return the array of objects after each key and value have been 
//added to each object in the array.


function addKeyAndValue(arr,key,val){
  arr.forEach(obj => obj[key] = val)
  return arr
}
console.log(addKeyAndValue([{name: 'Joshua'},{name: 'Mark'},{name: 'Arthur'}], "isInstructor", true))



/*
[
    {
        name: 'Joshua',
        isInstructor: true
    },
    {
        name: 'Mark',
        isInstructor: true
    },
    {
        name: 'Arthur',
        isInstructor: true
    }
]
*/









/*var arr = [{
    name: "Elie",
    isInstructor: true
  }, {
    name: "Tim",
    isInstructor: true
  }, {
    name: "Matt",
    isInstructor: true
  }]
  
  function extractKeys(array, key) {
    return array.reduce((acc, obj) => {
      return acc.concat(obj[key])
    }, [])
  }  
  console.log(extractKeys(arr, 'name'))*/


  
/*const extractKeys = key => obj => obj[key];
const result = original.map(extractKeys("name"));*/


/*


//  Let’s say you have a list of numbers. You want to find the total sum of these numbers.
  const numberList = [2,3,4,6,8];
  const totalSum = numberList.reduce(function(acc, num ){
    return acc + num

  });
  console.log(totalSum)


const filterLetters = ["a","a","b","c","A"]; // 3
/*function occurrence(key, value)
    return  filterLetters.reduce(function(acc, filterLetters){
      return acc.concat(filterLetters[key])
})

console.log(occurrence(filterLetters, "a"))*/

/*
const numArray = [1,2,3,4,5];
const valTimesIndex = numArray.forEach(function(value, index){
  for(let value in numArray)
  console.log(value * index, numArray[index])

  
})


function newFunctionName (){
    console.log('My name is Kehinde')
}
newFunctionName()

*/








/*
  const courses = [
    {id: 1, name: 'mth101'},
    {id: 2, name: 'chm201'},

  ];
  const found = courses.find(function(course){
    console.log('====>', course)
    return course.name === 'mth101';     

  })
  console.log(found)
*/