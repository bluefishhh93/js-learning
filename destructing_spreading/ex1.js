const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


// /Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor] = countries;

//Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;
for (const { name, scores, skills } of users) {
    console.log(name, scores, skills);
  }
  
  // Find the persons who have less than two skills
  console.log('less than two');
  for (const { name, scores, skills } of users) {
    if (skills.length <= 2) console.log(name, scores, skills);
  }

  //student
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
  const [namee, skills, [, , jsScore,reactScore]] = student;
  
  console.log(namee, skills, jsScore, reactScore);