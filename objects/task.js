// let user = {
//     user1: "suresh",
//     age : 25,
//     address: {state:"Tamilnadu",country:"india"},
//     fruit: ["apple","mango","banana"]
// }
// let details = {
//     city : "chennai",
//     area: "sipcot"
// }
// // // to get all the user object output
// // user.address = {...user.address,...details}

// // //to get what we did that output only
// // user = {...user.address,...details}

// // user = {...user}
// // console.log(user)

// // details = {...details}
// // console.log(details)

// details = {...details,...user.address}
// details = {...details,...user.age}
// console.log(details)

// -----------------------------------------------------------------------------------------------------------------
                // How to new keyvalue comes into first (ID)

let user = {
    name: "Rohinth",
    age : 25,
}

user = {id:1,...user}
console.log(user)


