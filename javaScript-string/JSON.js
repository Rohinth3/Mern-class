
             //  Normal object has been changed new value
// let obj1 = {
//     name : "rohinth",
//     age : 25
// }

// let obj2 = obj1
//  obj1.age = 32;

// console.log(obj2)

// ------------------------------------------------------------        
        
        //    Stringify
        // has not been change new value

// let obj1 = {
//     name : "rohinth",
//     age : 25
// }

// let obj2 = JSON.stringify(obj1)
//  obj1.age = 32;

// console.log(typeof(obj2))
// console.log(obj2)


                                // Whatever it is String the answer because using stringify
let obj1 = {
    name : "rohinth",
    age : 25
}
let obj2 = JSON.stringify(12)
 obj1.age = 32;

console.log(typeof(obj2))
console.log(obj2)

   
// --------------------------------------------------------------------------------------------

                // JSON.parse   ---> Same result   ---> Copy String (JSON.stringify) to object (JSON.parse)

// let obj3 = {
//     name : "rohinth",
//     age : 25
// }
// let obj4 = JSON.parse(JSON.stringify(obj3))
//  obj3.age = 32;

//  console.log(typeof(obj4))
// console.log(obj3)

                                    // TO check the Datatype 12 using JSON.parse  12--> int '12' --> String
// let obj3 = {
//         name : "rohinth",
//         age : 25
//     }
//     let obj4 = JSON.parse(JSON.stringify(12))
//      obj3.age = 32;
    
//      console.log(typeof(obj4))
//     console.log(obj4)
