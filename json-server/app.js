
var url = "http://localhost:3000/courses";

fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })