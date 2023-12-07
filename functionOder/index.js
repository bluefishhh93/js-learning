//Callback
const callback = (n) =>{
    return n*2;
}
//function that take other function as a callback
function cude(callback, n){
    return callback(n) * n;
}

//returning function
const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatEver = t =>{
            return 2 * n + 3 * m;
        }
        return doWhatEver
    }
    return doSomething;
}

// forEach method uses call back.
const number = [1,2,3,4,5];
const SumArray = arr =>{
    let sum = 0;
    const callback = function(element){
        sum += element;
    }
    arr.forEach(callback); //arr moi lan tra ve mot phan tu trong mang
    return sum;
}


//Setting Interval using a setInterval function

function sayHello(){
    console.log("Hello");
}

setInterval(sayHello,1000); //print hello every 1s

//functional programming
//forEach

arr.forEach(function(element,index, arr){
    console.log(index, element,arr);
})

arr.forEach((element,index, arr)=>{
    console.log(index, element,arr);
})

arr.forEach((element, index, arr) => console.log(index, element, arr))


let sum = 0;
const number3 = [1,2,3,4,5,6];
number3.forEach(num => sum += num);
console.log(sum);//               21


//Map
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)//[ 1, 4, 9, 16, 25 ]

//sort numbers
const listNumers = [1,5,4,3,8];
number.sort(function(a,b){
    return a-b
});

listNumers.sort((a,b)=> b-a);

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  // [{…}, {…}, {…}, {…}]