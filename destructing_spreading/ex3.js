const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  
 let {name,age,skills} = student;
 skills['frontEnd'].push( { skill: 'Bootstrap', level: 9 });
 skills['backEnd'].push( { skill: 'Express', level: 9 });
 skills['dataBase'].push( { skill: 'SQL', level: 8 });
 skills['dataScience'].push('SQL');

console.log({name,age, skills});


console.log(student);


//hoac skills.frontEnd.push() 