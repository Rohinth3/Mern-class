// Find the string index number


// let myName =  "Rohinth"

//     for(i=0; i<myName.length; i++){
//         let temp = myName[i]
//         console.log(temp, i)
//     }

// ----------------------------------------------------------------------------------------------------

// TASK Rohinth    output: R_o_h_i_n_t_h

// let name = "Rohinth"
// let temp = ""

// for(let i of name){
//     temp = temp + i + '_'
    
// }
// console.log(temp.slice(0,-1))

// let name = "Rohinth";
// let output = ""

// for(i=0; i<name.length;  i++){
//     output += name[i];
//     if(i<name.length-1){
//         output += "_"
//     }
       
// }
// console.log(output)


// ------------------------------------------------------------------------------------------------------------

// Print the even index numbers letters only from the given string  eg:suresh   o/p: srs

// let name = "softlogic"
// let n = ""

// for (i=0; i<name.length; i=i+2){
//     n = name[i]
//     console.log(n)
// }

// let x = "softlogic suresh"
// let y = ''

// for(i in x){
//     if(i %2 == 0){
//         // + means concatination
//         y = y + x[i] 
//     }
    
// }
// console.log(y)


// ------------------------------------------------------------------------------------------------------------------

// FInd the Factorial value of the given number  5!=5×4×3×2×1=120.  o/p:120

// let fact = 5
// let n =1

// for(i =1; i<=fact; i++){
//     n = n * i
    
// }
// console.log(n)

// -----------------------------------------------------------------------------------------------------------------

// Remove the space and slice from second letter to tenth letter
// from the result add underscore at the middle and show the final result

// let name = "my institute name is softlogic"

// console.log(name.replaceAll(' ','_'))

// name = name.replaceAll(' ','').slice(1,11)
// console.log(name)

// let name1 = name.slice(0,name.length/2)
// console.log(name1)

// let name2 = name.slice(name.length/2)
// console.log(name2)

// var result = name1 + '_' + name2
// console.log(result)



// -----------------------------------------------------------------------------------------------------------------------

// PALINDROME

// let word = "malayalam"
// let reverse = ""

// for(i=word.length-1; i>=0; i--){
//     reverse = reverse + word[i]    
// }
// console.log(reverse)
// if (word == reverse){
//     console.log("This is palindrome")
// }
// else{
//     console.log("This is not Palindrome")
// }


