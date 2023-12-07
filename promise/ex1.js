const countriesAPI = 'https://restcountries.com/v2/all'


//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    .then(Response => Response.json())
    .then(data => {
        data.forEach(country => {
            const {name, capital, languages, population, area } = country;
            console.log('country',name);
            console.log('capital',capital);
            console.log('languages',languages);
            console.log('population',population);
            console.log('area',area);
            console.log('---------------------------');
        })
    })

    .catch(error => console.error(error));



