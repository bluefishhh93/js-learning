const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Find the person who has many skills in the users object
const personManySkills = [];
for (const user in users) {
  console.log(user); //Alex, Asab, Brook, Daniel, John, Thomas, Paul
  // console.log(user.skills); //undefined
  const userSkills = users[user].skills;
  if (userSkills.length > 1) {
    personManySkills.push(user);
  }
}
console.log('has more than one skill')
console.log(personManySkills);
//Find people who are MERN stack developer from the users object
const mernStackDevelopers = [];
for (const user in users) {
  const userSkills = users[user].skills;
  if (
    userSkills.includes("MongoDB") &&
    userSkills.includes("Express") &&
    userSkills.includes("React") &&
    userSkills.includes("Node")
  ) {
    mernStackDevelopers.push(user);
  }
}
console.log('MERN: ');
console.log(mernStackDevelopers);

//Get all keys or properties of users object
console.log('keys:');
const keys = Object.keys(users);
console.log(keys);

//Get all the values of users object
console.log('values:');
const values = Object.values(users);
console.log("Values of the users object:");
values.forEach(value => {
  console.log(value);
});