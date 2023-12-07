const names = ['thanh','nha','nho'];

let len = names.length;
for(let i = 0; i < len; i++) {
    console.log(names[i].toUpperCase());
}

for(const name in names){
    console.log(name.toUpperCase());
}

names.forEach((name) => name.toUpperCase());


const Person = {
    firstName: 'johny',
    lastName: 'dang',
    age: '22',
    country: 'china'
}

for(const key in Person){
    console.log(key);
}

for(const key in Person){
    console.log(Person[key]);
}

