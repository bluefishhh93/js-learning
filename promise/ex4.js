const countriesAPI = 'https://restcountries.com/v2/all'

//Read the countries api and find out the 10 largest countries

// console.log('top 10 largest countries ')
// const startTime = performance.now();

fetch(countriesAPI)
    .then(Response => Response.json())
    .then(data => {
        data.sort((a,b) =>{
            return parseInt(b.area) - parseInt(a.area);
        })
        console.log(data.slice(0,10));
        // const endTime = performance.now(); // End the timer
        // const executionTime = endTime - startTime;
        // console.log('Execution time:', executionTime, 'milliseconds');
    })

    .catch(error => console.error(error));

//more faster
// const startTime = performance.now();
// console.log('top 10 largest countries');
// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         const largestCountries = quickSort(data, 'area');
//         console.log(largestCountries.slice(0, 10));
//         const endTime = performance.now(); // End the timer
//         const executionTime = endTime - startTime;
//         console.log('Execution time:', executionTime, 'milliseconds');
//     })
//     .catch(error => console.error(error));

// // QuickSort implementation
// function quickSort(arr, prop) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[Math.floor(arr.length / 2)];
//     const pivotValue = parseInt(pivot[prop]);

//     const less = [];
//     const equal = [];
//     const greater = [];

//     arr.forEach(item => {
//         const itemValue = parseInt(item[prop]);
//         if (itemValue < pivotValue) {
//             less.push(item);
//         } else if (itemValue > pivotValue) {
//             greater.push(item);
//         } else {
//             equal.push(item);
//         }
//     });

//     return quickSort(greater, prop).concat(equal, quickSort(less, prop));
// }
