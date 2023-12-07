const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  
  for (const language of setOfLanguages) {
    console.log(typeof language) // string
    console.log(language) // English, Finnish, French, Spanish...
  }

  //adding to set
  setOfLanguages.add("Vietnamese");

  //delete from set
  setOfLanguages.delete("English");

  //remove all setOfLanguages.clear();

  const langSet = new Set(languages);
  console.log(langSet);
  console.log(langSet.size);

  const counts = [];
  const count = {};

  for(const l of langSet){
    const filteredLang = languages.filter((lng)=>lng === l);
    console.log(filteredLang);
    counts.push({lnag: l, count: filteredLang.length});
  }

  console.log(counts);

  //union of set
  let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets
let a2 = [1, 2, 3, 4, 5]
let b2 = [3, 4, 5, 6]

let A2 = new Set(a)
let B2 = new Set(b)

let c2 = a.filter((num) => B.has(num))
let C2 = new Set(c)

console.log(C)

//map
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)      //Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

  console.log(map.size) //3

  map.set('Vietnam','Phu Yen');

  console.log(map);
  console.log(map.get('Vietnam'));  //Phu Yen
  
  console.log(countriesMap.has('Finland')) //true