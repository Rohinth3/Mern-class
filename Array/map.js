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




