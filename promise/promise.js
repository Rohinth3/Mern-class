                //promise
        //// it is working because settimeout() fun is take time to execute.

function add(a,b){
    return new Promise((resolve,reject)=> {
       setTimeout(() => {
        resolve(a+b)
       }, 2000);
    })
}
function output(num1,num2,callBack){
    const res = callBack(num1,num2)
    //without then function()
    console.log("res-->",res)
    //then function() using only promise
    res.then((data)=> {console.log("data-->",data)})
}
output(5,4,add)


// -----------------------------------------------------------------------------------------------------------------
                    // Callback function
            // it is not working because settimeout() fun is take time to execute. Promise fun() only working by this condition.so using 
            //the callback fun() next version of Promise() fun.
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
