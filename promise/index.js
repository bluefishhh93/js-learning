const doSomething = callBack => {
    setTimeout(() =>{  //là một hàm JavaScript được sử dụng để lập lịch thực thi một hành động (một hàm callback) sau một khoảng thời gian nhất định.
        const skills = ['html', 'css', 'js'];
        callBack('it dit not go well',skills);
    },2000)
}

const callBack = (err,result) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result); //logs the result to the console and then immediately exits the callback function.
}

doSomething(callBack);


console.log('ham promise');
const doPromise = new Promise((resolve,reject) =>{ //hàm doPromise được thực thi ngay khi nó được khởi tạo.
    setTimeout(() => {
        const skills = ['html', 'css', 'js'];
        if(skills.length>0){
            resolve(skills);
        }else{
            reject('Something wen wrong');
        }
    })
});

doPromise
    .then(result => console.log(result))
    .catch(err => console.log(err));

    //Fetch API




const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error=> console.error(error))

//Async and Await

const square = async function (n) {
    return n * n
  }
// const value = await square(2);
// console.log(value); 
  
  let a = square(2)
  console.log(square(2)); //Promise { 4 }
  console.log(a);  //Promise { 4 }
  //The word async in front of a function means that function will return a promise. 
  //The above square function instead of a value it returns a promise.

  
  // Đặt mã trong một hàm async
  (async function() {
    const value = await square(2);
    console.log(value); //4
  })();

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()
