
// let arr =  ["apple", "hi", {name:"rohinth"}, ["batman","flash"] ]

// for(i of arr){
//     console.log(i)
// }

                            // I need all datavalues only

// let arr =  ["apple", "hi", {name:"rohinth"}, ["batman","flash"] ]

// for (i of arr){
//     if(typeof i == "object" && i.name){
//         console.log(i.name)
//     }else{
//         console.log(i)
//     }
// }

// ---------------------------------------------------------------------------------------

                                // Removing 1st or middle array value

// let arr = ["apple","orange","grapes","orange"]
// // empty array variable
// let output = []

// for(i of arr){
//     if(i != "orange"){
//         //push --> add
//         output.push(i) 
//     }
// }
// console.log(output)

// ----------------------------------------------------------------------------------------
                                    // Remove first index [1] array

// let arr = ["apple","orange","grapes","orange"]
// let result = []

// for(i in arr){
//     // console.log(i)
//     if(i != 1){
//         result.push(arr[i])
//     }
// }
// console.log(result)

// --------------------------------------------------------------------------------------
                                    // updating the first index ['kiwi] instead off orange
    
// let arr = ["apple","orange","grapes"] 
// let output = []

// for (i in arr){
//     if(i == 1){
//         output.push("kiwi",arr[i])
//     }else{
//         output.push(arr[i])
//     }
// }
// console.log(output)

// or

// let arr = ["apple","orange","grapes"] 
// let output = []

// for (i in arr){
//     if(i == 1){
//         output.push("kiwi")
//     }
//         output.push(arr[i])
    
// }
// console.log(output)

// -----------------------------------------------------------------------------------------

                                    // Replacing the 2nd index content

// let arr = ["apple","orange","grapes","hi"] 
// let output = []

// for (i in arr){
//     if(i ==2){
//         output.push("kiwi")
//     }else{
//         output.push(arr[i])
//     }
// }
// console.log(output)

// ----------------------------------------------------------------------------------
                                    // Merging 2 arrays with new variable 

// let arr = ["apple","orange"]

// let arr1 = ["grapes","hi"]
// let output;

// // output = [...arr,arr1]
// // console.log("Form new array inside arr:",output)

// output = [...arr,...arr1]
// console.log("Form all in same array:",output)
// ------------------------------------------------------------------------------------
                                    // Merging 2 arrays without new variable 

// let arr = ["apple","orange"]
// let output = ["kiwi","banana"]

// arr = [...arr,...output]
// console.log(arr)

// ------------------------------------------------------------------------------------------

                                    // Shift ---> it was neglecting 1st array only

// let fruits = ["apple","orange","mango"]
// let r = fruits.shift()
// // returning the value what you deleting the data
// console.log(r)
// console.log(fruits)

                                    //UnShift --> it was adding elements 1st array only 

// let fruits = ["apple","mango","grapes"]
// let output = fruits.unshift("kiwi")
// // returning the value what you adding the data
// console.log(output)
// console.log(fruits)

// ------------------------------------------------------------------------------------
                                     // concat
// let arr = ["apples","banana"]
// let data = ["avengers","DC"]
// let final = arr.concat(data)
// // let final = [...arr,...data]
// console.log(final)

// -----------------------------------------------------------------------------------------
                                    // Join -->  it takes string and adding the join comments("--") in between array.

// let arr = ["white","yellow","green"]
// let result = arr.join("--")
// console.log(result)

// ----------------------------------------------------------------------------------------------
                                        //indexOf
// let arr = ["white","yellow","green"]

// let result = arr.indexOf("white")
// console.log(result)

// -----------------------------------------------------------------------------------------
                                        //Slicing

// let arr = ["white","yellow","green","pink"]
// let r = arr.slice(0,2)
// let res = arr.slice(-4,-1)
// console.log(r)
// console.log("reverse slicing:",res)

// -----------------------------------------------------------------------------------------
                                            // SPLICE 
                                            // syntax : [indexnumber,deletecount,item1,item2,item3...]

                            // //delete
// let fruits = ["grapes","banana","kiwi","apple"]
// let n = fruits.splice(2,1)
// console.log(n)
// console.log(fruits)

                            // // replace
// let fruits = ["grapes","banana","kiwi","apple"]
// let r = fruits.splice(1,3,"lalala")
// console.log(r)
// console.log(fruits)

                            //  //insert
// let fruits = ["grapes","banana","kiwi","apple"]
// fruits.splice(2,0,"mango","jackfruit")
// console.log(fruits)
// -----------------------------------------------------------------------------------------

                                //SORT --> number->ascending order   string->Alphabet order  

// let fruits = [5,4,2,3,1]
// let a = fruits.sort()
// console.log(a)
// console.log(fruits)

//           //              mixed letter and numbers
                        
let fruits = ["apple",5,"grapes","3",3,4,1,2,'banana']
fruits.sort()
console.log(fruits)

// -----------------------------------------------------------------------------------------

                        // FLAt

                        