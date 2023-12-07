localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
console.log('hi');
console.log('dmm');
localStorage.setItem('age', 200)
console.log(localStorage)

// const skills = ['html','css','js','React'];
//Storing an array in a localStorage. If we are storing an array, an object or 
//object array, we should stringify the object first. See the example below.
// const skillsJson = JSON.stringify(skills,undefined,4);
// localStorage.setItem('skills', skillsJson);
console.log(localStorage);


let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills = localStorage.getItem('skills');
console.log(firstName, age, skills);


localStorage.clear();
console.log(localStorage);