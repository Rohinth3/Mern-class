// Vowels words Count
// let word = "ahello woriled tahis iis fun tss"
// output = 3 3 2 2 1 0


// let word = "ahello woriled tahis iis fun taeious"
// console.log(word[word.length-1])

// let output = ""
// let count = 0
// let vowels = "aeiou"

// for (i in word){
//     if(word[i] != " "){
//         if(vowels.includes(word[i])){
//             count ++
//             // count = count + output  display count number
//         }
//         else if(i == word.length-1){
//             output = output + " " + count
//             count = 0
//         }
//     }
//     else{
//             output = output + " " + count 
//             count = 0
//     }
        
// }
// //  output = output + " " + count    ---> THis also works but "ahello woriled tahis iis fun tss "   output = 3 3 2 2 1 0 0 extra 0 add 
// // because last add extra space
// console.log(output)
// --------------------------------------------------------------------------------------------------------------
// output = "sh" find the common letter

let name1 = "suresh"
let name2 = "santhosh"
let output = ''

for(i of name1){
    for(j of name2){
        if(i == j &&  output.includes(i) == false){
            output = output + i
        }
    }
}
console.log(output)


