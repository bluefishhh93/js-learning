var name = "js";
var price = 1000;

var course ={
    name,
    price,
    getName(){
        return name;
    }
};
console.log(course);

//tuong duong
/*
    var course = {
        name : name,
        price : price,
        getName : function(){
            return name;
        }
    }
*/
var fieldName = 'name';
var fieldPrice = 'price';

var course2 = {
    [fieldName]: 'c#',
    [fieldPrice]: 2000,
}
console.log(course2);