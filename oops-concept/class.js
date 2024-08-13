                // //CLASS 
    // // FUNCTION

// class Calculator {
//   add (a,b){
//     return a + b
//   }
//   sub (){
//     return 3 - 5
//   }
//   null (){
//     return 2 * 5
//   }
  
// }

// obj = new Calculator()

// console.log(obj.add(3,5))
// console.log(obj.sub())
// console.log(obj.null())

// ---------------------------------------------------------------------------------------------------------------------------------

                    // // CONSTRUCTOR --> without call the function [just we declare the new obj it will work ]
// class Calculator {
  
//     constructor (){
//       console.log("this is testing")
//     }
// }
//                     // //just we declare the new obj
// obj = new Calculator()
// -------------------------------------------------------------------------
class Calculator {
  
    constructor (a,b){
      console.log(a + b)
    }
}
                    // //just we declare the new obj
obj = new Calculator(5,2)