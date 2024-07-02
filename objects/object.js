
// let user = {
//     name : "Rohinth",
//     age : 25,
//     gender : "Male"
// }
// console.log(user)
// console.log(user['name'])
// console.log(user.name)

// ------------------------------------------------------------------------------------------------------------------

// let name = {
//     userName : "Rohinth",
//     age : 25,
//     email : "rohintbsgb@gmail.com",
//     //another object 
//     address : {name1: "history", name2 : "geography",name3: 23},
//     movie : {movie1:"avengers", movie2:"Dc"},
//     //array 
//     fruit1 : ["apple","mango"],
//     fruit2 : ["banana","grapes"],
//     word : "hi hello"
// }
// console.log(name)

// ---------------------------------------------------------------------------------------------

//Update or changing the date
// let name = {        
//         userName : "Rohinth",
//         age : 25,
//         fruit : {fruit1:"mango",}
// }

// name.userName = "Rohinth.M"
// name.fruit.fruit1 = "papaya"
// console.log(name)

// -----------------------------------------------------------------------------------------

// Adding KEY VALUE PAIRS AND NESTED KEY VALUE PAIRS

// let name = {
//     age : 25,
//     fruit : {fruit1:"mango",}
// }
// console.log("before",name)

// // Adding KEY VALUE PAIRS
// name.userName = "Rohinth"
// console.log("Adding KEY VALUE PAIRS:",name)

// // NESTED KEY VALUE PAIRS
// name.fruit.fruit2 = "Banana"
// console.log("NESTED KEY VALUE PAIRS",name)

// --------------------------------------------------------------------------------
//  DELETING THE KEY VALUE PAIRS

//  let name = {
//         age : 25,
//         fruit : {fruit1:"mango",fruit2 : "Apple"}
//     }
//     // deleting the key value
//     // delete name['age']
//     delete name.age
//     console.log(name)

//     // deleting the nested key value
//     delete name.fruit.fruit2
//     console.log(name)

    // ----------------------------------------------------------------------------------

// IDENTIFY THE KEYS, VALUES AND ENTRIES

// let name = {
//         userName : "Rohinth",
//         age : 25,
//         email : "rohintbsgb@gmail.com",
//         address : {name1: "history", name2 : "geography",name3: 23},
// }
// // keys only
// console.log(Object.keys(name))

// //Values only
// console.log(Object.values(name))

// //entries using keys and values in array struture
// console.log(Object.entries(name))

// -----------------------------------------------------------------------------------------------

//Adding new object or copy old object to new object 

// let name = {
//     userName : "Rohinth",
//     age : 25,
//     email : "rohintbsgb@gmail.com",
//     address : {name1: "history", name2 : "geography",name3: 23},
// }
// console.log("name:",name)

// //copied new object
// let data = new Object(name)
// console.log("copied name object:",data)

// //creating new object
//             //                                let  newObject1 = { 
//             //  DEMO                                  name : "murugan"
//             //                                    }
//             //                                console.log(newObject1)

// let newObject = {}
// newObject = "Murugan"
// console.log("New object:",newObject)

// ---------------------------------------------------------------------------------------------------------

//SPREAD OPERATOR ***

// let name1 = {
//          userName : "Rohinth",
//          age : 25,
//          email : "rohintbsgb@gmail.com",
//          address : {name1: "history", name2 : "geography",name3: 23},
// }

// let name2 ={
//     movie1 : "Avengers",
//     movie2 : "Batman"
// }

// // // It takes output of inside new object in keyvalues in data
// // name1 = {name1}
// // console.log("not using spread operator",name1)

// // ----------------------------------------------------

// // //Spread operator not creating new object in inside old object                   but use name1 = name1 also not go to merging option
// // name1 = {...name1}
// // console.log("using spread operator",name1)

// // ----------------------------------------------------

// //merging the 2 objects

//  // name2 -- It creates name1{} inside into another object name2 {}    

// // name1 = {...name1 , name2}
// // console.log(name1)

// // ----------------------------------------------------

// // Dirctly merging the object no new object created inside 
// // Reassigning name1 = {...name1} same object to assign to affect the changes

// // name1 = {...name1 , ...name2}
// // console.log(name1)

// // ----------------------------------------------------

// // creating new variable
// // combinedObj = {...name1} -- it is also same output but not refelcts the inside name1 object

// // let combinedObj = {...name1,...name2}
// // console.log(combinedObj)

// ----------------------------------------------------------------------------------------------------------------------------------
     
// Duplicate Values

// output is 24 same key but different data so takes last new data only
// let name3 = {
//     age : 25,
//     age : 24
// }
// console.log(name3)

// -------------------------------------------------------------------------
// username is Murugan (because last new data) it is merging user and user1

// let user = {
//     userName : "Rohinth",
//     age : 25,
// }

// let user1 ={
//     userName : "Murugan",
//     age : 24,
//     movie1 : "Avengers",
// }

// user = {...user,...user1}
// console.log(user)

// --------------------------------------------------------------------------------------------------------

// Using For loop in object  (i of user) not working error coz not getting the data for the option

let user = {
        userName : "Rohinth",
        age : 25,
        email: "rohintjbrgfb"
    }

    //Checking object index number but it is not used.
// for (i=0;i<Object.keys(user).length;i++){
//     console.log(i)
// }

// find the data to get object in for loop
// for(i in user){
// }
// console.log(user)

// not output coz reverse index is not used in Object operators.
// for(i= Object.keys(user).length; i<=0; i--){
//         console.log(user)
// }

for(i in user){
    user.age = 52
    delete user.email
    user.fav =  "IPl"
    
    
    
}
console.log(user)


