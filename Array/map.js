let users = [
    {   
        unique_id : 1,
        name: "rohinth",
        age : 25   
    },
    {
        name : "Sanjai",
        age : 24
    },
    {
        unique_id : 2,
        name : "Suresh",
        age : 50
    },
    {
        name : "Ganesh",
        age : 45
    }
]
//map
let output = users.map((i)=>{
    //i.unique_id --> key value pairs in object
    if(!(i.unique_id)){
                                        // Math.floor(Math.random()*10) --> It is  used for random numbers formula
                                        //i = {unique_id: Math.floor(Math.random()*10),...i} --> Spread
        i = {unique_id: Math.floor(Math.random()*10),...i}
        // // i.unique_id = Math.floor(Math.random()*10)
        //return is mandatory in MAP.
        return i
    }
})
console.log(output)

// let output = []
// for(i of users){
//     if(!(i.unique_id)){
//         i.unique_id = Math.floor(Math.random()*10)
//         output.push(i)
//     }
// }
// console.log(output)

// -----------------------------------------------------------------------------------------------------------------

// // Task 1: Use map to convert an array of objects into an array of values from a specific property, then filter out duplicate values.
// // sample input const items = [
// //     { id: 1, category: 'fruit' },
// //     { id: 2, category: 'vegetable' },
// //     { id: 3, category: 'fruit' },
// //     { id: 4, category: 'dairy' }
// // ];
// // sample output --> // ['fruit', 'vegetable', 'dairy']


// const items = [
//     { id: 1, category: 'fruit' },
//     { id: 2, category: 'vegetable' },
//     { id: 3, category: 'fruit' },
//     { id: 4, category: 'dairy' }
// ];

// let output = []

//  output = items.map((i)=>{
//    if(i.id !=3){
//      return i.category
//    }
//  })
 
//  console.log(output)

// for(i of items){
//   if(i.id != 3 ){
//     output.push(i.category)
//   }
// }
// console.log(output)
// -----------------------------------------------------------------------------------------------------------------




