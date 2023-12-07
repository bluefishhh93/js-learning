const prompt = require("prompt-sync")();
//

//function create random user ID
function generatedUserID() {
  //Number convert a value to a number, if it is not valid, value == NaN
  const numCharacter = Number(prompt("Enter the number of character: "));

  const numberOfID = Number(prompt("Enter the number of IDs:"));
  const listOfID = [];
  for (let i = 0; i < numberOfID; i++) {
    let id = generateRandomString(numCharacter);
    listOfID.push(id);
  }
  return listOfID;
}

function generateRandomString(numCharacter) {
  let generatedIds = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < numCharacter; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedIds += characters.charAt(randomIndex);
  }
  return generatedIds;
}
// console.log(generatedUserID());

//Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array
function generateHexaColor() {
  //16777215 is the max value of hexadecimal color
  const hexaColor = Math.floor(Math.random() * 16777215).toString(16); //toString(16) chuyen mot so ngau nhien thanh hexadecimal value

  const paddedColor = "#" + "0".repeat(6 - hexaColor.length) + hexaColor;

  return paddedColor;
}

function arrayOfHexaColors(numOfColors) {
  const colors = [];
  for (let i = 0; i < numOfColors; i++) {
    const color = generateHexaColor();
    colors.push(color);
  }
  return colors;
}

// let num = Number(prompt('Enter number of hexadecimal color you want to create: '));
// console.log(arrayOfHexaColors(num));

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(originalArr) {
  const shuffledArray = [...originalArr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    // vế trái là thay đổi giả trị cho i và j, vế phải là xác định vị trí của 2 giá trị, gán giá trị tương ứng đó
  }

  return shuffledArray;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
console.log(shuffledArray);

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
  if (typeof value === "undefined" || value === null) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    //console.log(keys); // Output: ['name', 'age', 'gender']
    return true;
  }

  return false;
}
/*
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male"
};

Object.defineProperty(person, "email", {
    value: "john@example.com",
    enumerable: true // Thuộc tính có khả năng duyệt qua
});

const keys = Object.keys(person);

console.log(keys); // Output: ["firstName", "lastName", "age", "gender", "email"]

*/


//Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }

// console.log(generatedUserID());
console.log(sum(1, 2, 3, 4, 5));