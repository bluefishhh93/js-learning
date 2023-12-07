// API cổng giao tiếp giữa các ứng dụng(URL)
// url ví dụ về 1 cái trang và cái trang đấy trả về dữ liệu

//BAckend -> api(URL) -> fetch -> json /xml-> frontend
// JSON.parse() : chuyển từ json sang js
// render ra giao dien html

const url = "http://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(Response => Response.json()) //cai nay tuong duong { return response.json()}
    //thang response co mot phuong thuc la json() tra ve mot promise
    //co the hieu la JSON.parse: JSON -> JS types
    .then(data => console.log(data.slice(0,3)))



fetch(url)
    .then(Response => Response.json()) //cai nay tuong duong { return response.json()}
    .then(datas => {
        var htmls = datas.map(data => {
            return `<li>
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            </li>`
        });
    })

    var html = htmls.join('');
    document.createElement('div').innerHTML = html; 