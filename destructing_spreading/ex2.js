//Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(array) {
    const arrayObject = [];
    for(const[name,skills,scores] of students){
        arrayObject.push({name,skills,scores});
      }
      return arrayObject;
}


  console.log(convertArrayToObject(students));