
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
// let obj1 = {
//     name : "rohinth",
//     age : 25
// }
// let obj2 = JSON.stringify(12)
//  obj1.age = 32;

// console.log(typeof(obj2))
// console.log(obj2)

   
// --------------------------------------------------------------------------------------------

                // JSON.parse   ---> Same result   ---> Copy String (JSON.stringify) to object (JSON.parse)  Return to object proccess

let obj3 = {
    name : "rohinth",
    age : 25
}
let obj4 = JSON.parse(JSON.stringify(obj3))
 obj3.age = 32;

 console.log(typeof(obj4))
console.log(obj4)

                                    // TO check the Datatype 12 using JSON.parse  12--> int '12' --> String
// let obj3 = {
//         name : "rohinth",
//         age : 25
//     }
//     let obj4 = JSON.parse(JSON.stringify(12))
//      obj3.age = 32;
    
//      console.log(typeof(obj4))
//     console.log(obj4)

// --------------------------------------------------------------------------------------------------------
// let name = "suresh"

// let output = ''

// for(i in name){
  
//   // console.log(i+1, name[name.length - (parseInt(i) +1)])
//   output = output + name[name.length - (parseInt(i)+1)]
//  }
// console.log(output)
