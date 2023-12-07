var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

var people2 = [
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

//Find the first person off the people array is teenager (age >=10 and age <=20)
console.log('Find the first person off the people array is teenager (age >=10 and age <=20)')
console.log(people.filter(person => person.age >= 10 && person.age <= 20).slice(0, 1))

//Find the all person of the people array is teenager (age >=10 and age <=20)
console.log('Find the all person of the people array is teenager (age >=10 and age <=20)')
console.log(people.filter(person => person.age >= 10 && person.age <= 20))


//Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
const checkAge = (person) =>{
    return person.age >= 10 && person.age <= 20
}

console.log('Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false')
console.log(people.every(checkAge))
console.log(people2.every(person => person.age >= 10 && person.age <= 20))

var array = [1, 2, 3, 4]
console.log('sum:'+  array.reduce((number,accumulator) => number+accumulator , 0))