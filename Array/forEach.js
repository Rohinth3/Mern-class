// Directly modify by main array

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

users.forEach((i) => {
    if(!(i.unique_id)){
        // i.unique_id = Math.floor(Math.random()*10)
        i = {unique_id: Math.floor(Math.random()*10),...i}
        return i 
    }
})
console.log(users)


