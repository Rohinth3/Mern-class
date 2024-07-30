//output proper number : 1,2,3,4,5,6,7,8

// let arr = [4,6,3,8,2,7,1,5]
// let output = []

// while (true){
//     if(arr.length == 0){
//         break;
        
//     }
//     // console.log("this is testing") --> continue loop running not work in vse code.
//     let maxNum = 0
//     let index;
//     for(i in arr){
//         if(arr[i] > maxNum){
//             maxNum = arr[i]
//             index = i
//         }
//     }
//         //IT will adding the maximum number to convert output.
//         output.unshift(maxNum)

//         // TO remove the maximun number in arr[] 
//         arr.splice(index,1) 
//         console.log("this is testing",output)
// }
// console.log(output)


// // With object
// let arr = [4,6,3,8,2,7,1,5]
// let output = []

// while (true){
//     if(arr.length == 0){
//         break;
//     }
//     let suportData = {
//         maxNum: 0,
//         maxIndex: null
//       }
      
//       for (let i in arr) {
//         if ( arr[i] > suportData.maxNum ) {
//           suportData['maxNum'] = arr[i]
//           suportData['maxIndex'] = i
//         }
//       }
//       output.unshift(suportData.maxNum)
//       arr.splice(suportData.maxIndex, 1)
      
//     }
    
//     console.log(output)

// --------------------------------------------------------------------------------------------------

// input [5, 0, 0, 4, 0, 1, 2, 0, 7, 0, 0, 9, 3, 0, 8]
// ouput [1, 0, 0, 2, 0, 3, 4, 0, 5, 0, 0, 7, 8, 0, 9]

let input = [5, 0, 0, 4, 0, 1, 2, 0, 7, 0, 0, 9, 3, 0, 8]
let output = []

// --------------------------------------------------------------------------------------------------
            //Insert ID in 1st 

// let user = {
//     name: "Rohinth",
//     age : 25,
// }
// let output = {
// id : 1
// }

// user = {...output,...user}
// console.log(user)