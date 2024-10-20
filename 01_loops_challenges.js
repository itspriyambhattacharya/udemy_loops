//Question 1
let arr1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  if (element === "chai") {
    break;
  } else {
    selectedTeas.push(element);
  }
}
console.log(selectedTeas);

//Question 2

let arr2 = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Paris") {
    continue;
  }
  visitedCities.push(arr2[i]);
}
console.log(visitedCities);

// Question 3

let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];
for (const element of numbers) {
  if (element == 4) {
    break;
  }
  smallNumber.push(element);
}
console.log(smallNumber);
