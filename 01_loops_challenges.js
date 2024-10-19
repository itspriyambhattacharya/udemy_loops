//Question 1
let arr1 = ["green tea", "black tea", "chai", "oolong tea"];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  if (element === "chai") {
    break;
  } else {
    console.log(element);
  }
}
