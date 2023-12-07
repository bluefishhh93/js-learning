//Destructing Arrays

const numbers = [1,2,3];
let [a,b,c] = numbers;

console.log(a,b,c);
const name = ['an','bin','cuu'];
[a,b,c] = name;
console.log(a,b,c);

let [d, , e]= numbers; 
console.log(d,e); //1  3

const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson, , fourthPerson] = names // first and third person is omitted

  console.log(secondPerson, fourthPerson) //Brook John


  let [
    f = 5,
    g,
    h,
    k
  ] = [undefined, 4 , 7 ,8];
  console.log(f, g, h,k) // 5,4,67,8 | phai co undified o dau thay cho f thi moi duoc. neu undefined kia la so 1 thi f se la so 1 chu khong phai 5


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // 4,5,6,7,8,9,10

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third] of fullStack) { // html css js
  console.log(first, second, third)                // node express mongodb
  }

  