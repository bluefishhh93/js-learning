function myFunction(param){
    if(typeof param === 'function'){
    param(123);
    }
}

function myCallback(value){
    console.log('Value: ', value);
}
function hello(){
    console.log('Hello');
}

myFunction(myCallback); 
myFunction(()=>{console.log('Arrow function')});
myFunction(hello);
hello(1111);

// định nghĩa call back
//1. là hàm
//2. Truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)

