                //promise  --> settimeout() fun => {callstack-->webapi-->callback [event loop mechanism]}
        //// it is working because settimeout() fun is take time to execute.
        // settimeout() & fetch() are asynchronous fun. it is work in promise and async await fun

// function add(a,b){
//     return new Promise((resolve,reject)=> {
//        setTimeout(() => {
//         resolve(a+b)
//        }, 2000);
//     })
// }
// function output(num1,num2,callBack){
//     const res = callBack(num1,num2)
//     //without then function()
//     console.log("res-->",res)
//     //then function() using only promise
//     res.then((data)=> {console.log("data-->",data)})
// }
// output(5,4,add)


// -----------------------------------------------------------------------------------------------------------------
                // Callback function  --> settimeout() fun {} => {trigger directly try to run callstack[not going -->webapi-->callback]}
            // it is not working because settimeout() fun is take time to execute. Promise fun() only working by in this function.so not 
            // using the callback fun() instead off using next version of Promise() fun.
// function add(a,b){
//     setTimeout(() => {
//      return a+b
//     }, 2000);
// }
// function output(num1,num2,callBack){
//  const res = callBack(num1,num2)
//  console.log(res)
// }
// output(5,4,add)
// -----------------------------------------------------------------------------------------------------------------
                    //promise() multiply the 3 numbers
// function multiply(a,b,c){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(a*b*c)
//         }, 5000);
//     })  
// }

// function output(num1,num2,num3,callback){
//     const test = callback(num1,num2,num3)
//     test.then((data) => {console.log("data-->",data)})
// }
// output(2,4,2,multiply)
// -----------------------------------------------------------------------------------------------------------------
            ///promise() with using .then and .catch
             ////.then -> if resolve work
             ////.catch -> if reject work
             
// function sub(a,b){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             if(a<10){
//                 resolve(a-b)
//             }
//             else{
//                 reject("something went wrong")
//             }
//         },2000)
//     })
// }
// function result(num1,num2,callback){
//     const test = callback(num1,num2)

                //// console.log("error-->",error)}) --> output will come in webpage
//     test.then((data)=>{console.log("data-->",data)}).catch((error)=>{console.log("error-->",error)})
// }
// result(20,10,sub)

// --------------------------------------------------------

// function sub(a,b){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             if(a<10){
//                 resolve(a-b)
//             }
//             else{
//                 reject("something went wrong")
//             }
//         },2000)
//     })
// }
// function result(num1,num2,callback){
//     const test = callback(num1,num2)
//                         ////console.log("error-->",error) instead off console.log -> error will come trigger output in webpage
//     test.then((data)=>{console.log("data-->",data)}).catch((error)=>{console.error("error-->",error)})

//                         //// console.log("error-->",error)}) --> output will come in webpage
//     test.then((dup)=>{console.log("dup",dup)}).catch((err)=>{console.log("err-->",err)})
// }
// result(4,10,sub)
// result(20,6,sub)
// -----------------------------------------------------------------------------------------------------------------
    
// function word(a){
//         return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             if(a){
//               resolve(a)
//             }else{
//               reject("Try again later!!")
//             }
//           },2000)
//         })
//       }
      
//       function output(n,callback){
//         callback(n)
//       }
      
//       output("Hi",word)
// -----------------------------------------------------------------------------------------------------------------
                                                // //output:
                                                // // Fetching...
                                                // // end of script...
                                                // // Data fetched
                                                // // process completed
function add(){
  console.log('Fetching...')
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( console.log('Data fetched'))
    },1000)
  })
}

function demo(callBack){
  const res = callBack()
  res.then((data)=>{console.log('process completed')})
}

demo(add);
console.log('end of script...')

