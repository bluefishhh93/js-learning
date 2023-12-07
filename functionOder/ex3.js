const countries = require("./countries_data.js");

console.log(countries.length);

//sort countries by name
const countriesByName = countries.sort((a, b) => a.name.localeCompare(b.name));

//sort countries by Captital
const countriesByCaptital = countries.sort((a, b) =>
  a.capital.localeCompare(b.capital)
);

//sort countries by population
const countriesByPopulation = countries.sort(
  (a, b) => a.population - b.population
);

//Find the 10 most spoken languages:
console.log("Find the 10 most spoken languages:");
function mostSpokenLanguages(countries,n) {
  const languagesUsed = [];
  const mostLanguagesUsed = [];
  countries.forEach(function (country) {
    country.languages.forEach(function (language) {
      if (!languagesUsed.includes(language)) {
        languagesUsed.push(language);
      }
    });
  });


  
  languagesUsed.forEach(function (language) {
    let count = 0;
    countries.forEach(function (country){
        if(country.languages.includes(language)){
            count++;
        }
    });
    mostLanguagesUsed.push({language:`${language}`,count:`${count}`});
  });
  return mostLanguagesUsed.sort((a,b)=>b.count - a.count).slice(0,n);
}
console.log(mostSpokenLanguages(countries,10));
//top most population
console.log("most population");
function mostPopulation(array, n) {
  return countries.sort((a, b) => b.population - a.population).slice(0, n);
}
console.log(mostPopulation(countries, 10));
