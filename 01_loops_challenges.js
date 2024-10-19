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
