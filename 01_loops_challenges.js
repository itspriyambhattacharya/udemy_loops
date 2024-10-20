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

//Question 4

let chai_arr = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTea = [];
for (const element of chai_arr) {
  if (element == "herbal tea") {
    continue;
  }
  preferredTea.push(element);
}
console.log(preferredTea);

//Question 5

let cityPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulation = {};

for (const key in cityPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityNewPopulation[key] = cityPopulation[key];
}
console.log(cityNewPopulation);

// Question 6

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const key in worldCities) {
  if (worldCities[key] < 3000000) {
    continue;
  }
  largeCities[key] = worldCities[key];
}
console.log(largeCities);

// Question 7

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTea = [];
let stopItr = false;
teaCollection.forEach((item) => {
  if (stopItr == true) return;
  if (item === "chai") {
    stopItr = true;
    return;
  }
  availableTea.push(item);
});
console.log(availableTea);

//Question 8

let worldCities2 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCity = [];

worldCities2.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  travelledCity.push(city);
});
console.log(travelledCity);

//Question 9

let numbers2 = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numbers2.length; i++) {
  const element = numbers2[i];
  if (element === 7) {
    continue;
  }
  doubledNumbers.push(element * 2);
}
console.log(doubledNumbers);

// Question 10

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTea = [];
for (const item of myTeas) {
  if (item.length > 10) {
    break;
  }
  shortTea.push(item);
}
console.log(shortTea);
