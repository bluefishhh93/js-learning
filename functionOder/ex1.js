const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Use forEach to console.log each country in the countries array.
countries.forEach((contry) => console.log(contry));

//Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseContries = countries.map((country) => country.toUpperCase());
console.log("upper case countries:");
console.log(uppercaseContries);

//Use map to create an array of countries length from countries array.
const countryLengths = countries.map((country) => country.length);
console.log("length of contries list:");
console.log(countryLengths);

//Use map to map the products array to its corresponding prices.
const priceOfProducts = products.map((product) => product.price);
console.log("price of products:");
console.log(priceOfProducts);

//Use filter to filter out countries containing land.
const countriesContainsLand = countries.filter((country) =>
  country.includes("land")
);
console.log("countries contains land:");
console.log(countriesContainsLand);

// /Use filter to filter out country start with 'E';

const countriesStartWithE = countries.filter(
  (country) => country.charAt(0) === "E"
);
console.log("contries starts with E:");
console.log(countriesStartWithE);

//Use filter to filter out only prices with values.
const productsWithPrices = products.filter(
  (product) => typeof product.price === "number"
);
console.log("products with prices");
console.log(productsWithPrices);

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentences =
  countries.reduce((accumulator, country, index) => {
    if (index === countries.length - 1) {
      return accumulator + "and " + country;
    } else {
      return accumulator + country + ", ";
    }
  }) + " are north European countries";

console.log(sentences);

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter((product) => typeof product.price === "number")
  .map((product) => product.price)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalPrice);