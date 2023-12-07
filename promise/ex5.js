const countriesAPI = 'https://restcountries.com/v2/all'

//Read the countries api and count total number of languages in the world used as officials.
console.log('number of languages');
fetch(countriesAPI)
    .then(Response => Response.json())
    .then(data => {
      const listOfLanguages = [];
      data.forEach(country => {
        country.languages.forEach(language => {
            if (!listOfLanguages.includes(language.name)) {
                listOfLanguages.push(language.name);
            }
        })
      })
      console.log(listOfLanguages.length);
      for(let i =0 ; i < listOfLanguages.length ; i++) {
        console.log(listOfLanguages[i]);
      }
    })

    .catch(error => console.error(error));
