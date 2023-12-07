//Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const txt1 = JSON.stringify(skills,undefined,4);
console.log(txt1);

//Stringify the age variable
let age = 14;
const txt2 = JSON.stringify(age);
console.log(txt2);

//Stringify the isMarried variable
let isMarried = false;
const txt3 = JSON.stringify(isMarried);
console.log(txt3);


// /Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const txt4 = JSON.stringify(student,undefined,4);
console.log(txt4);

//Stringify the students object with only firstName, lastName and skills properties
const txt5 = JSON.stringify(student,['firstName', 'lastName', 'skills'],4);
console.log(txt5);

//Parse the txt JSON to object.

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
console.log('text to object by json parse')
const parseObj = JSON.parse(txt);
console.log(parseObj);



// Tìm người dùng có nhiều kỹ năng nhất từ đối tượng parseObj
function hasManySkills(obj) {
    let max = Number.NEGATIVE_INFINITY;
    let maxSkillUsers = [];
    for (const user in obj) {
      const skillsCount = obj[user].skills.length;
      if (skillsCount > max) {
        max = skillsCount;
        maxSkillUsers = [obj[user]];
      } else if (skillsCount === max) {
        maxSkillUsers.push(obj[user]);
      }
    }
    return maxSkillUsers;
}

console.log('Users with the most skills:');
const usersWithMostSkills = hasManySkills(parseObj);
console.log(usersWithMostSkills);

const array = ['a', 'c', 'd', 'e'];
for(const char of array){
    console.log(char);
}