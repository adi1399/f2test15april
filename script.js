/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(printbyMap); 
  function printbyMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printbyForEach); 
  function printbyForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  arr.push({id: 4, name: "susan", age: "20", profession: "intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let withoutAdmin_arr = arr.filter(function (val) {
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(withoutAdmin_arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "suraj", age: "26", profession: "Programmer" },
    { id: 6, name: "shreeram", age: "24", profession: "developer" },
    { id: 7, name: "vikas", age: "25", profession: "Manager" },
  ];

  let newArray = arr.concat(arr2);
  console.log(newArray);
}
