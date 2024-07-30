// // Task 1: Use map to create an array of square roots from an array of numbers.
// // sample input  // [1, 4, 9, 16, 25];
// // samplet output // [1, 2, 3, 4, 5]
 
// let input = [1,4,9,16,25]
 
// let output = input.map(i = Math.sqrt)
// console.log(output)

// ---------------------------------------------------------------------------------------------------------------------------------

// // Task 2: Use filter to create an array of even numbers from an array of integers.
// // sample input const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // samplet output // // [2, 4, 6, 8, 10]

// let number =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let output = number.filter((i) => {
//   if(i % 2 == 0){
//     return i
//   }
// })
// console.log(output)

// ---------------------------------------------------------------------------------------------------------------------------------

// // Task 3: Use forEach to print each element of an array of strings to the console.
// // sample input const strings = ['apple', 'banana', 'cherry'];
// // sample output
//  // apple
//  // banana
//  // cherry
 
//  let strings = ['apple', 'banana', 'cherry']
 
//  let result = strings.forEach(i => {
//    console.log(i)
//  })

// ---------------------------------------------------------------------------------------------------------------------------------
// // Task 4: Use map to convert an array of strings to uppercase.
 
// // sample input const strings = ['apple', 'banana', 'cherry']; 
// // sample output // ['APPLE', 'BANANA', 'CHERRY']

// let input = ['apple', 'banana', 'cherry'];

// let output = input.map(i => i.toUpperCase())
// console.log(output)
// ---------------------------------------------------------------------------------------------------------------------------------

// // Task 5: Use filter to create an array of objects where a certain property is greater than a specified value.
// // samplet input 
// // const items = [
// //     { name: 'item1', price: 50 },
// //     { name: 'item2', price: 100 },
// //     { name: 'item3', price: 200 },
// // ];
 
// // sample output 
// // // [{ name: 'item3', price: 200 }]


// const items = [
//     { name: 'item1', price: 50 },
//     { name: 'item2', price: 100 },
//     { name: 'item3', price: 200 },
// ];

// let output = items.filter((i) => {
//   if(i.price == 200){
//     return i
//   }
// })
// console.log(output)

// ---------------------------------------------------------------------------------------------------------------------------------
