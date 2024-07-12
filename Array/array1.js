
// let arr =  ["apple", "hi", {name:"rohinth"}, ["batman","flash"] ]

// for(i of arr){
//     console.log(i)
// }

                            // I need all datavalues only

let arr =  ["apple", "hi", {name:"rohinth"}, ["batman","flash"] ]

for (i of arr){
    if(typeof i == "object" && i.name){
        console.log(i.name)
    }else{
        console.log(i)
    }
}

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







    