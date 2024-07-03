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

// -----------------------------------------------------------------------

// Find the common letters in both string output : sh

// let name1 = "santhosh"
// let name2 = "suresh"
// let output = ''

// for(i of name1){
//     // console.log("i--->",i)
//     // console.log(name1.includes(i))
//     for(j of name2){
//         // console.log("j-->",j)
//         // console.log(name2.indexOf(j))

//         //output.includes(i) == false
//         //output.indexOf(i)== -1 --> False meaning
        
//         // output. --> not declare in first so empty string''   output.includes(i) == false  [output=nostring i[words]]false ==false
//         // output.indexOf(i)== -1  [output=nostring i[words]]-1 ==-1
//         if(i==j && output.includes(i) == false ){
//             output = output + i  
//         }
//     } 
// }
// console.log("The output is:",output)



// --------------------------------------------------------------------------------------

// hello o/p : h1e1l2l2o1 counts    e-1 letter    l-2 letter

// let name = "HELLO"
// let output = ""

// for(i of name){
//     let count = 0
//     for(j of name){  
//         if(i==j){
//             count++
//         }
//     } 
//     output = output + i + count
// }
// console.log(output)

// ---------------------------------------------------------------------------------

// Task 1 --------------
// 	•	Input: "hello world"
// 	•	Output: "olleh dlrow"

// let name = "hello world"
// let output = ''

// for(i of name){
//     output = i + output
// }
// console.log(output)

//Right one

// let name = "hello"
// let name1 = "world "
// let output = ''
// for(i=name.length-1; i>=0 ; i--){
//     output = output + name[i] 

// }

// for(j=name1.length-1; j>=0 ; j--){
//     output = output + name1[j] 

// }
// console.log(output)

// ---------------------------------------------------------------------------------------------

// Task 2: -----------
// 	•	Input: "Hello World"
// 	•	Output: "hELLO wORLD"

// let user = "Hello World"
// let result = ""

// for(i=0; i<user.length; i++){
//     let word = user[i]
//     if(word ==  word.toUpperCase()){
//         result = result + word.toLowerCase()
//        }
//        else{
//         result = result + word.toUpperCase()
//        }       
// }

// console.log(result)

// ----------------------------------------------------------------------------------------------

// Task 3:
// Input: "hello world"
// Output: "hlowrd"

// let name = "hello world"
// let output = ""

// for (i=0; i<=name.length; i = i+2){
//     output = output + name[i]
// }
// console.log(output)

// -----------------------------------------------------------------------------------------

// // Task 4:

// // 	•	Input: "I have 2 apples and 3 bananas"
// // 	•	Output: "I have two apples and three bananas"

// // 	•	Input: "I have 23 apples"
// // 	•	Output: "I have two three apples"


// let name = "I have 2 apples and 3 bananas"
// let n;

// switch (name){
//    case "I have 1 apples and 2 bananas":
//       n = "I have one apples and two bananas";
//    break;
//    case "I have 2 apples and 3 bananas":
//       n = "I have two apples and three bananas";
//    break;
//    case "I have 1 apples and 1 bananas":
//       n = "I have one apples and one bananas";
//    break;

// }
// console.log(n)\

// -------------------------------------------------

// let input = "I have 23 apples"
// let output;

// switch (input){
//    case "I have 23 apples":
//       output = "I have two three apples";
//    break;
//    case "I have 33 apples":
//       output = "I have three three apples";
//    break;
//    case "I have 43 apples":
//       output = "I have four three apples";
//    break;
//    case "I have 53 apples":
//       output = "I have five three apples";
//    break;
//    case "I have 63 apples":
//       output = "I have six three apples";
//    break;
// }
// console.log(output)



// -------------------------------------------------------------------------------------

// Task 5:

// 	•	Input: "hello"
// 	•	Output: "hheelllloo"

let word = "hello"
let result = "";

for(i=0; i<word.length;i++){
   result = result + word[i] + word[i]
}
console.log(result)

// -------------------------------------------------------------------------------








