 // Sync / Async
//js là ngôn ngữ đồng bộ sync nhưng nó có các thao tác bất đồng bộ async(vd: hàm setTimeOut)

// setTimeout, setInterval, 
/*
Trong JavaScript, có nhiều tình huống và cơ chế không đồng bộ (asynchronous) mà bạn có thể gặp. Dưới đây là một số ví dụ phổ biến:

1. **setTimeout và setInterval**: Được sử dụng để thiết lập việc thực thi mã sau một khoảng thời gian cụ thể (hoặc định kỳ). Mã trong hàm callback sẽ không chạy ngay lập tức, mà sau thời gian đã được chỉ định.

2. **Callbacks**: Là một hàm được truyền vào một hàm khác như là một đối số. Callback thường được sử dụng để thực hiện một tác vụ không đồng bộ sau khi một tác vụ khác hoàn thành.

3. **Promises**: Là một cơ chế cho phép xử lý các tác vụ không đồng bộ theo cách dễ đọc hơn. Promises được sử dụng để thực hiện các tác vụ có thể hoàn thành thành công hoặc thất bại.

4. **Async/Await**: Là một cú pháp mới hơn cho việc làm việc với Promises. Async/Await giúp viết mã không đồng bộ một cách dễ đọc và giống như viết mã đồng bộ.

5. **XMLHttpRequest và Fetch API**: Được sử dụng để thực hiện các yêu cầu HTTP không đồng bộ đến máy chủ và xử lý phản hồi.

6. **Event Listeners**: Khi bạn gắn một event listener vào một phần tử HTML, mã của bạn sẽ được thực thi khi sự kiện xảy ra (như khi người dùng nhấp chuột, gõ phím, vv.).

7. **File I/O**: Đọc và ghi tệp tin cũng là một tác vụ không đồng bộ, do đó bạn cần sử dụng callbacks, Promises, hoặc async/await để xử lý chúng.

Nhớ rằng, việc hiểu cách JavaScript xử lý các tác vụ không đồng bộ là quan trọng để viết mã hiệu quả và tránh các vấn đề liên quan đến đồng bộ hóa.
*///3 trang thai pending fullfill reject
//promise để giải quyết một vấn đề nào đó trong quá trình lập trình bất đồng bộ
//promise dùng để giải quyết các vấn đề như callbackhell: khi một tác vụ phụ thuộc vào tác vụ trước, nếu có nhiều tác vụ thì sẽ xảy ra callbackhell
//promise có tham số là một hàm có 2 tham số là resolve và reject. Khi gọi tới promise thì nó sẽ gọi ngay thằng executor
//.resolve sẽ được gọi khi tác vụ thành công, reject sẽ được gọi khi tác vụ thất bại.
let numTest = 2;
var promise = new Promise(
    //Executor
    function(resolve,reject){
        //logic
        if(numTest < 3){
        resolve([ //mảng các object
            {
                id:1,
                name: 'JS'
            }
        ])
        }else{
            reject('Error');
        }
    }
);

promise //then va catch deu nhan vao mot callback function
    .then(function(course){
        //được gọi nếu hàm resolve được gọi
        console.log(course);
    })
    .catch(function(error){
        //được gọi nếu hàm reject được gọi
        console.log(error);
    })
    .finally(function(){
        //được gọi khi hàm resolve hoặc reject được gọi
        console.log('done');
    })



//tinh chat chuoi cua promise
let numTest2 = ;
var promise2 = new Promise(
    //Executor
    function(resolve,reject){
        //logic
        if(numTest < 3){
            resolve();
        }else{
            reject('Error');
        }
    }
);
console.log('vi du ve tinh chat chuoi')
promise2 //then va catch deu nhan vao mot callback function

    .then(function(){ //success
        //được gọi nếu hàm resolve được gọi
        return 1;
    })
    .then(function(data){
        console.log(data);
        return 2;
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .then(function(data){
        console.log(data);
    })
//fail
    .catch(function(error){
        //được gọi nếu hàm reject được gọi
        console.log(error);
    })
    .finally(function(){
        //được gọi khi hàm resolve hoặc reject được gọi
        console.log('done');
    })
//***NOTE: nếu thằng 1 không return cc gì thì data ở .then thứ 2 sẽ là undefined
//***NOTE: nếu .then thứ nhất return 1 promise thì nó sẽ chờ thằng promise đó thực thi thì thằng .then 2 mới thực thi*/
console.log('vi du ve tra ve mot promise')
var promise3 = new Promise(function(resolve,reject){
    resolve();
});


promise3
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]); //gửi cho thằng sau
            },3000);
        });
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error);
    })


// vi du ve xu ly bat dong bo
console.log('vi du xu ly bat dong bo')
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
        return sleep(1000);
    })
    .then(()=>{
        console.log(3);
        return sleep(1000);
    })
    .then(()=>{
        console.log(4);
        return sleep(1000);
    })