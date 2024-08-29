// get even numbers words only from the given string…

// let data = "hello world this is testing"
// let data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry gh"

// let num = 0
// let output = ''
// let word = ''

// for(i in data){
//   if(data[i]  != " "){
//     word = word + data[i]
//     if(i == (data.length -1)){
//       if(i % 2 == 0){
//         output = output + " " + word
//       }
//       word =""
//     }
//   }
//   else if(data[i] == " "){
//     num ++ 
//     if(num % 2 == 0){
//       output = output + " " + word
//     }
//     word =""
//   }
// }
// console.log(output)

// -------------------------------------------------------------------------------------------------------------------------------
// let data = "hello world this is testing"
// let data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

// function result(num,output,word){
//   for(i in data){
//     if(data[i]  != " "){
//       word = word + data[i]
//       if(i == (data.length -1)){
//         if(i % 2 == 0){
//           output = output + " " + word
//         }
//         word =""
//       }
//     }
//     else if(data[i] == " "){
//       num ++ 
//       if(num % 2 == 0){
//         output = output + " " + word
//       }
//       word =""
//     }
//   }
//   console.log(output)
// }
// result(0,'','')

// -------------------------------------------------------------------------------------------------------------------------------

// get the reverse sentences   
// i/p : my name is softlogic
// o/p : softlogic is name my

// using built in function()
let reversed = "my name is softlogic"
let output = reversed.split(" ").reverse().join(' ')
console.log(output)

// split(" ") --> remove space and creating the array element ([my],[name],[is],[softlogic])
// reverse()  --> to reverse the every array element ([softlogic],[is],[name],[my])
// join(" ")  --> to modify the array to string and add the space(" ")   o/p: softlogic is name my

// split('') splits the string into an array of individual characters.
// reverse() reverses the order of those characters.
// join('') joins the characters back into a string.