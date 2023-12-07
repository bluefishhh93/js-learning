//JavaScript allows writing function inside an outer function. 
//We can write as many inner functions as we want. If inner 
//function access the variables of outer function then it is called closure.

function outerFunction(){
    let number = 0;

    function innerFunction(){
        number++;
        return number;
    }

    return innerFunction;
}
const innerFunction = outerFunction();
console.log(innerFunction()); //1
console.log(innerFunction()); //1
console.log(innerFunction()); //1

// console.log(innerFunction); 1
// console.log(innerFunction); 2
// console.log(innerFunction); 3


// function outerFunction(){
//     let count = 0;
//     function plusOne(){
//         count++;
//         return count;
//     }
//     function minusOne(){
//         count--;
//         return count;
//     }
//     return {
//         plusOne: plusOne(),
//         minusOne: minusOne()
//     }
// }

// const innerFunction = outerFunction();
// console.log(innerFunction.plusOne);  //1
// console.log(innerFunction.minusOne); //0
