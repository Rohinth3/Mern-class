                                   //CLASS
// class Name {
//     add (){
//       return 5 + 4
//     }
//     mul(){
//       return 4 * 2
//     }
//   }
//   obj = new Name()
  
//   console.log(obj.add())
//   console.log(obj.mul())
//   -----------------------------------------------------------------------
                /// parameter passing 
// class Name {
//     add (a,b){
//       return a + b
//     }
//     mul(c,d){
//       return c * d
//     }
//   }
//   obj = new Name()
  
//   console.log(obj.add(5,4))
//   console.log(obj.mul(4,3))
//   ---------------------------------------------------------------------------------------------------------------------------------
                                      //// CONSTRUCTOR FUNCTION ()
        //// NO NEED TO CALL THE FUNCTION IF CREATE THE OBJECT TO CALL THE CLASS IS WORKING PROPERLY
// class Calc {
//   constructor (){
//     console.log("testing")
//     console.log(5 * 5)
//     console.log(5 + 5)
//     console.log(5 - 5)

//   }
// }
// obj = new Calc()
//   ---------------------------------------------------------------------------------------------------------------------------------
                //// parameter passing the constructor
                // only parameter passing in the constructor function()
// class Name{
//   constructor (a,b){
//     console.log("parameter-->",a+b)
//   }
// }
// obj = new Name(10,10)

//   ---------------------------------------------------------------------------------------------------------------------------------
                                        //constructor using THis keyword

class TestKeyword {
        constructor(name,age,email){
                this.name = name
                this.age = age
                this.email = email
        }
        add(a,b){
                return`${this.name} ${this.age} ${this.email} | add: ${a+b}`
        }
        sub(a,b){
                return`${this.name} ${this.age} ${this.email} | sub: ${a-b}`
        }
        mul(a,b){
                return`${this.name} ${this.age} ${this.email} | mul: ${a*b}`
        }
}
key = new TestKeyword("rohinth",25,"rohinth2014@gmail.com")

console.log(key.add(10,10))
console.log(key.add(10,100))
console.log(key.sub(10,10))
                        // If not console.log(mul)-> not get an output mul moreover
key.mul(10,10)
// //-----------------------------------------------------------------

// const canEat = {
//         eat() {
//             console.log('Eating...');
//         }
//     };
    
//     const canWalk = {
//         walk() {
//             console.log('Walking...');
//         }
//     };
    
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//         // add(a,b){
//         //   return `${this.name} | add: ${a+b}`
//         // }
//     }
    
//     // Copy the methods from mixins into the prototype of Person
//     Object.assign(Person.prototype, canEat, canWalk);
    
//     person = new Person('John');
//     // console.log(person.add(5,4))
//     person.eat();  // Output: Eating...
//     person.walk(); // 

// //  ---------------------------------------------------------------------------------------------------------------------------------
                                        //INHERITANCE
                        // MERGING PARENT AND CHILD classes

// class Classes {
//         constructor(a,b){

//         }
//         add(a,b){
//                 return a + b
//         }
//         sub(a,b){
//                 return a - b
//         }          
// }

// class Child extends Classes{
//         mul(a,b){
//                 return a * b
//         }
// }

// cal = new Child(5,4)

// console.log("Add->",cal.add(5,4))
// console.log("Sub->",cal.sub(5,4))
// console.log("Mul->",cal.mul(5,4))
//  // ---------------------------------------------------------------------------------------------------------------------------------
                                // POLYMERPHISM
        // SAME FUN() BUT DIFFERENT CLASSES AND THE FUNCTION PROCESS MOREOVER DIFFERENT

// class Class1{
//   word(){
//     console.log("Web")
//   }
// }
// class Class2{
//   word(){
//     console.log("Developer")
//   }
// }
// class Class3{
//   word(){
//     console.log("Mern")
//   }
// }


// obj = [new Class1(),new Class3(),new Class2()]

// for(i of obj){
//   i.word()
// }

// class Class1{
//   sum(a,b){
//     return a + b
//   }
// }
// class Class2{
//   sum(a,b){
//     return a - b 
//   }
// }
// class Class3{
//   sum(a,b){
//     return a / b
//   }
// }


// obj = [new Class1(),new Class2(),new Class3()]

// for(i of obj){
//   console.log(i.sum(5,4))
// }

//  // ---------------------------------------------------------------------------------------------------------------------------------
