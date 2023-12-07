//PROMISE METHOD (RESOLVE, REJECT, ALL)

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms); //resolve kieu nay la deo tra ve cai gi ca, goi thang tiep theo thoi.
    })
}    


sleep(1000)  //bởi vì thằng sleep return về một promise nên có thể .then
    .then(()=>{
        console.log(1);
        return sleep(1000);
    })
    .then(()=>{
        console.log(2);
        return new Promise((resolve,reject)=>{
            reject('co loi');
        });
    })
    .then(()=>{
        console.log(3);
        return sleep(1000);
    })
    .then(()=>{
        console.log(4);
        return sleep(1000);
    })
    .catch(error=>{
        console.log('Vai loz' + error);
    })

//có một vài thư viện có output luôn là một promise
//1. Promise.resolve
var promise = Promise.resolve('Success'); //luon luon tra ve trang thai thanh cong

promise
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error); //khong bao gio chay vao day
    });
   
//nếu các luồng bất đồng bộ nhưng không phụ thuộc vào nhau và muốn lấy dữ liệu từ .then1 và .then2  để làm 1 
//1 điều gì đó chung thì dùng Promise.all

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1]);
    },2000);
});

var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    },3000);
});
let array;
promise1.then(function(data1) {
    promise2.then(function(data2) {
        array = data1.concat(data2);
        console.log(combinedArray);
    });
});
console.log(array);    
//cach dùng all
Promise.all([promise1,promise2]) //khi tat ca dau vao cua all xong thi no moi xuong cai .then
    .then(function(result){  //result la 1 mang chua ket qua cua cac promise
        console.log(result[0].concat(result[1]));
    });
// Promise.all([promise1,promise2]) //khi tat ca dau vao cua all xong thi no moi xuong cai .then
//     .then(function(result1, result2){  //result la 1 mang chua ket qua cua cac promise
//         console.log(result1.concat(result2));
//     });

//neu chi can 1 thang co loi thi se lot vao thang .catch