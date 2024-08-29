// LINK--> https://kamronbekshodmonov.github.io/JELoop-Visualizer/?trk=public_post_comment-text 
// eventloopmechanism
// CALL STACK --> WEBAPI --> CALLBACK QUEUE


// function output() {
//   console.log("one");
  
//   setTimeout(function() {
//     console.log("two");
//   },2000);
  
//   console.log("three");
//   console.log("four");
//   console.log("five");
//   setTimeout(function(){
//     console.log("six");
//   },2000);
//  	console.log("seven");
//   console.log("eight");
//   console.log("nine");
//   console.log("ten");
//   console.log("11");
//   console.log("12");
//   console.log("13");
// }
// output();

// --------------------------------------------------------------------------------------------------------------------------------

// function output() {
//     console.log("one");
    
//     setTimeout(function() {
//       console.log("two");
//     },14000);
    
//     console.log("three");
//     console.log("four");
//     console.log("five");
//     setTimeout(function(){
//       console.log("six");
//     },2000);
//        console.log("seven");
//     console.log("eight");
//     console.log("nine");
//     console.log("ten");
//     console.log("11");
//     console.log("12");
//     console.log("13");
//   }
//   output();

// --------------------------------------------------------------------------------------------------------------------------------

// function output() {
//   console.log("one");
  
//   setTimeout(function() {
//     console.log("two");
//   },2000);
  
//   console.log("three");
//   console.log("four");
//   console.log("five");
//   setTimeout(function(){
//     console.log("six");
//   },2000);
//  	console.log("seven");
//   console.log("eight");
//   console.log("nine");
//   console.log("ten");
//   console.log("11");
//    setTimeout (function (){
//     console.log("14");
//   },5000);
//   console.log("12");
//   console.log("13");
 
// }
// output();

// --------------------------------------------------------------------------------------------------------------------------------
                                            //callBack hell and event loop mechanism
// function add (a,b){
//     return a + b
// }

// function output (num1,num2,callback){
//     // var data = 0;
//     var data;
//     setTimeout(() => {
//         data = callback(num1,num2)
//         console.log("insidefunction-->",data)
//         // return data  --> undefined
//     }, 2000);
//     return data
// }
// // undefined --> 2000(2min take time after get output) so next process going return data[5,4,add is outside next process so 
// //it is undefined]
// console.log(output(5,4,add))
// --------------------------------------------------------------------------------------------------------------------------------

// console.log("one");
// console.log("two");

// function innovation(){
//   console.log("Hi Innovation");
// }

// function three(){
//   setTimeout(() => {
//     console.log("three");
//   }, 2000);
  
// }
// function four(){
//   console.log("Four");
// }
// three();
// console.log("last");
// innovation();
// four();

// --------------------------------------------------------------------------------------------------------------------------------
                                    //callback function using
                          //  one()-> two(){depending one()} -> three()  {depending one()and two()}       
function three() {
  console.log("three");

  setTimeout(function () {
    console.log("last");
  }, 1000);
}

function two() {
  console.log("two");
  three();
}

function one() {
  console.log("one");
  two();
}

one();

// ---------------------------------------------------------------------------------------------------------------------

