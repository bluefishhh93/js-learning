
function logger(...params){
    console.log(params); // [1,2,3,4]
}
// function logger(a,b...params){
//     console.log(params); // [3 4]
// }

function logger2({name, price, ...rest}){
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger2({
    name: 'tao',
    price: 2000,
    description: 'this is a text'
})

logger(1,2,3,4);

var arr1 = [1,2];
var arr2 = [3,4];
var arr3 = [...arr1,...arr2];
console.log(arr3); //[1,2,3,4]\

var object1 = {
    name: 'johny'
};

var object2 = {
    name : 'dang',
    age : 20,
    sex : 'male'
}

var object3 = { //name : 'dang' , age : 20 , sex : 'male'
    ...object1,
    ...object2,
}

