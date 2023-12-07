//create an empty set
const map1 = new Set();

//Create a set containing 0 to 10 using loop
for(let i = 0; i < 11; i++){
    map1.add(i);
}
//Remove an element from a set
map1.delete(5);
//Clear a set
map1.clear();

//Create a set of 5 string elements from array

//Create a map of countries and number of characters of a count
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const map2 = new Map();
  languages.forEach((language)=> map2.set(language,language.length));
  console.log(map2);