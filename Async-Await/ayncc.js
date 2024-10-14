
// function mul(a,b,c){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(a<=10){
//                 resolve(a*b*c)
//             }
//             else if(b>10){
//                 resolve(a*b*c)
//             }
//             else{
//                 reject("oops! error")
//             }
//         },2000)
//     })
// }
// async function output(num1,num2,num3,callback){
//     const res = await callback(num1,num2,num3)
//     console.log("result-->",res)
// }
// output(3,11,1,mul)

// -------------------------------------------------------------------------------------------------------------------------------

// function word(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(a=="Hi" && b=="Hello"){
//                 resolve(a+" "+b)
//             }
//             else{
//                 reject("missing words")
//             }
//         }, 2000);
//     })
// }
// async function output(d,e,callback){
//     const data = await callback(d,e)
//     console.log(data)
// }
// output("Hi","Hello",word)
// -------------------------------------------------------------------------------------------------------------------------------

// function word(a,b){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(a==b){
//                 resolve(a+" "+b)
//             } else{
//                 reject("missing words")
//             }           
//         }, 2000);
//     })
// }
// async function output(d,e,callback){
//     const data = await callback(d,e)
//     console.log(data)
// }
// output("Hi","Hello",word)
// //-------------------------------------------------------------------------------------------------------------------------------
                    ////ayncc await using reject()
// function word(a,b){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         if(a < 20){
//           resolve(a + b)
//         }else{
//           reject("Try again later!!")
//         }
//       },2000)
//     })
//   }
  
//   async function output(n1,n2,callback){
//     const res = await callback(n1,n2).catch((error)=>{console.log(error)})
//     console.log("await data-->",res)
//   }
  
//   output(22,4,word)

// //-------------------------------------------------------------------------------------------------------------------------------

  async function fetchData(){
  console.log('Fetching...')
  await new Promise((resolve)=>{
    setTimeout(()=>{
      console.log('Data fetched')
      resolve();
    },1000)
  });
  console.log('process completed')
}

fetchData();
console.log('end of script...')

// Fetching...
// end of script...
// Data fetched
// process completed