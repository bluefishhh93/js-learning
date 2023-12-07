const catsAPI = 'https://api.thecatapi.com/v1/breeds'



fetch(catsAPI)
    .then(Response => Response.json())
    .then(data => {
        const catNames = data.map(cat => cat.name);
        console.log(catNames);
    })    

    .catch(Error => console.error(error));