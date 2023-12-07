// console.log("1");
// console.log("2");
// console.log("3");

// //bất đồng bộ trong js là chúng ta có thể chuyển đến
// //tác vụ khác để thực thi mà không cần phải chờ tác vụ  trước thực hiện xong
// //nhờ vào đó bất đồng bộ giúp chúng ta thực hiện nhiều tác vụ đồng thời, làm
// //được nhiều việc hơn trong một khoảng thời gian
// //có 3 cách xử lí bất đồng bộ, callback, promise, async - await
// //có 2 loại chính: browser api/ web api  (setTimeout(), setInterval()/ click,scroll, event...)

// function httpGetAsync(theUrl, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//   };
//   xmlHttp.open("GET", theUrl, true);
//   xmlHttp.send(null);
// }

// httpGetAsync("https://picsum.photos/200/300", (data) => {
//   console.log(data);
//   document.getElementById("img_1").setAttribute("src", data.responseURL);
//   httpGetAsync("https://picsum.photos/200/300", (data) => {
//     console.log(data);
//     document.getElementById("img_2").setAttribute("src", data.responseURL);
//     httpGetAsync("https://picsum.photos/200/300", (data) => {
//       console.log(data);
//       document.getElementById("img_3").setAttribute("src", data.responseURL);
//     });
//   });
// });

//việc call một API nào đó cần dữ liệu trả về từ một API khác
//thì code kiểu callback rất khó đọc và khó maintain sau này
//do đó js cung cấp cho ta khái niệm PROMISE

//promise là một object đại diện cho một hành động bất đồng được thành công hay thất bại

//*******************8************************** */

// function httpGetAsync(theUrl, resolve) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//       if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
//     };
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
//   }


// const currentPromise = new Promise((resolve, reject) => {
//    httpGetAsync('https://picsum.photos/200/300',resolve)
// });


// const promise2 = new Promise((resolve, reject)=>{
//     httpGetAsync('https://picsum.photos/200/300',resolve)
// });
// const promise3 = new Promise((resolve, reject)=>{
//     httpGetAsync('https://picsum.photos/200/300',resolve)
// });


// currentPromise
//     .then((data)=>{
//         console.log(data);
//         document.getElementById('img_1').setAttribute('src',data.responseURL);
//         return promise2;
//     })
//     .then((data) => {
//         document.getElementById('img_2').setAttribute('src',data.responseURL);
//         return promise3;
//     })
//     .then(data => {
//         document.getElementById('img_3').setAttribute('src',data.responseURL);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//Async Await
function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }

  const currentPromise = new Promise((resolve, reject) => {
   httpGetAsync('https://picsum.photos/200/300',resolve)
});


const promise2 = new Promise((resolve, reject)=>{
    httpGetAsync('https://picsum.photos/200/300',resolve)
});
const promise3 = new Promise((resolve, reject)=>{
    httpGetAsync('https://picsum.photos/200/300',resolve)
});


// currentPromise
//     .then((data)=>{
//         console.log(data);
//         document.getElementById('img_1').setAttribute('src',data.responseURL);
//         return promise2;
//     })
//     .then((data) => {
//         document.getElementById('img_2').setAttribute('src',data.responseURL);
//         return promise3;
//     })
//     .then(data => {
//         document.getElementById('img_3').setAttribute('src',data.responseURL);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


//đối với async await thì function chứa các promise phải có keyword async ở trước
//do đó ta không thể sử dụng await ở cấp độ global, do đó phải bọc nó trong 1 cái function có keywork async ở trước
//await làm một promise ở trước thực hiện xong mới tới promise tiếp theo , điều này làm cho đoạn code bất đồng bộ
//thực hiện như một đoạn code đồng bộ
const executeAsync = async()=>{
    const response = await currentPromise;
    document.getElementById('img_1').setAttribute('src',response.responseURL);
    const response2 = await promise2;
    document.getElementById('img_2').setAttribute('src',response2.responseURL);
    const response3 = await promise3;   
    document.getElementById('img_3').setAttribute('src',response3.responseURL);
}
 
executeAsync();