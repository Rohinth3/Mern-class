// let name1 = "Rohinth"
// let output1 = ''

// for(i in name1){
//         // THIS INDEXNUMBER IS STRING if use (+1 --> rohinth R1o1h1i1n1t1h1 will be Added) (+2--> rohinth R2o2h2i2n2t2h2 Added) 
//   console.log(typeof(i) ,(name1[name1.length- i -1])+1)
//   output1 = output1 + (name1[name1.length- i -1]+1)
// }
// console.log( typeof(i),output1)
// ----------------------------------------------------------------
//           // using Function in reverse words
//           name = "rohinth"

// function reverse (data){
//   // console.log(data)
//   let output = ""
//   for(i in data){
//     output = output + data[data.length - (parseInt(i) +1) ]
//   }
//   console.log(output)
// }
// reverse(name)
// reverse("santhosh")
// reverse("malayalam")
// reverse("purushothman")
// ----------------------------------------------------------------------------------------------------------------------
//                     // parseInt()  --> userDefined function
//                   // but I need without using [-1]       name.length- i -1 and word start from 1 to end
// let name = "Rohinth"
// let output = ''

//                               // //  parseInt --> words starts with 1 to end (normally 0 to end)
//               // THIS INDEX NUMBER IS INTEGER  if use (+1 --> rohinth R will be removed) (+2--> rohinth RO removed) 
// for(i in name){
//   console.log(typeof((parseInt(i)) + 1), name[name.length - (parseInt(i) + 1)])
  
// }
// for(i in name){
//   output = output + name[name.length - (parseInt(i) + 1)+ 1]
//  }
// console.log(typeof(output),output)
// ----------------------------------------------------------------------------------------------------------------------
               // using Function in reverse words with parseInt()
// name = "rohinth"

// function reverse (data){
//   // console.log(data)
//   output = ''
//   for(i in data){
//     output = output + data[data.length - (parseInt(i) +1) ]
//   }
//   console.log(output)
// }
// reverse(name)
// reverse("santhosh")
// reverse("malayalam")
// reverse("purushothman")
// reverse()
// ----------------------------------------------------------------------------------------------------------------------

            // //RETURN --> To declared call function and which print the declared variable use return it will affect the reversed(declared fun)
// name = "rohinth"
// function reverse (data){
//   // console.log(data)
//   output = ''
//   for(i in data){
//     output = output + data[data.length - (parseInt(i) +1) ]
//   }
// //   return data
//   return {"reversed" : output , "length" : output.length}
// //   return "test"
// }
// console.log(reverse(name))
// console.log(reverse("santhosh"))
// let reversed = reverse("suresh")
// console.log(reversed)
// ---------------------------------------------------------
// function sub(){
//     return 7-5
// }
// function add(){
//     return sub()+1
// }
// console.log(add())
// console.log(add())

// ----------------------------------------------------------------------------------------------------------------------
                            //    //   default arguments [not used -> undefined]
// function user(name="rohinth",age=25,email="rohinth@"){
//     console.log(`The name is ${name} and age is ${age} and email is ${email}`)
// }
// user()
// user("suresh",27,"suresh@")
//// ----------------------------------------------------------------------------------------------------------------------
                    // //re arranging the function arguments
// function user({name,age,email}){
//     console.log(`The name is ${name} , age is ${age} and email is ${email}`)
// }
// user({age : 25, email:'rohinth@', name : "rohinth"})
////----------------------------------------------------------------------------------------------------------------------
                                //  multiple arguments in  single parameters       [spread operators --> array[all numbers]]                           
// function number (a,...num){
//     console.log(a,num)
// }
// number(2,4,10,25,74,234)
////----------------------------------------------------------------------------------------------------------------------

                                            // // CALL BACK FUNCTION
// return parameterFunction + name -> without () -> 
// o/p function func2 (){
// return "My name is :"
// }Rohinth

// function func1 (name,parameterFunction) {
//     return parameterFunction() + name
//   }
  
//   function func2 (){
//     return "My name is :"
//   }
//   console.log(func1('Rohinth',func2))

///-----------------------------------------------------
// function func1 (name,parameterFunction) {
//     return parameterFunction() + name
//   }
  
//   function func2 (){
//     return "My name is :"
//   }
  
//   const callBack = (func1('Rohinth',func2))
  
//   console.log(callBack)
///-----------------------------------------------------
                                            // // arrow fun and normal fun
const main = (a,b,callBack) => {
    return callBack(a,b)
  }
  
  function add(num1, num2){
    return num1 + num2
  }
  
  function multiply(num1,num2){
    return num1*num2
  }
  
  const output = main(5,4,add)
  console.log("Addition -->",output)
  
  const result =  main(5,4,multiply)
  console.log("Multiplication -->",result)
////----------------------------------------------------------------------------------------------------------------------