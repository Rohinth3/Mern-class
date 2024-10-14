                    //apicall using ayncc await

async function acall(){
    const res = await (await fetch ("https://fakestoreapi.com/products")).json()
        console.log(res)
}
acall()

// ----------------------------------------------------------------
                    /// apicall using promise function()
// function procall(){
//     fetch("https://fakestoreapi.com/products").then((data)=> {
//         data.json().then((res)=>{
//             console.log(res)
//         })
//     })
// }
// procall()
//   ---------------------------------------------------------------------------------------------------------------------------------
                                         // // try catch()

                //try working
// async function trcatcall(){
//     try{
//         const res = await(await fetch("https://fakestoreapi.com/products")).json()
//         console.log(res)
//     }catch(err){
//         console.log("something went wrong try again later",err)
//     }
// }
// trcatcall()
// ----------------------------------------------------------------
                      //  //catch working --> missed the link word working catch

// async function trcatcall(){
//     try{
//         const res = await(await fetch("https://fakestoreapi.com/product")).json()
//         console.log(res)
//     }catch(err){
//         console.log("something went wrong try again later",err)
//     }
// }
// trcatcall()
//   ---------------------------------------------------------------------------------------------------------------------------------
                                    //finally
   //// uses: reset the data  , try or catch-> connection established and final -> connection closed
// async function final(){
//     try{
//         const output = await(await fetch("https://fakestoreapi.com/products")).json()
//         console.log(output)
//     }catch(error){
//         console.log("problem bye",error)
//     }finally{
//         console.log("Final will work if try or catch work")
//         console.log("uses: reset the data  ,  connection established and final connection closed")
//     }
// }
// final()
// ----------------------------------------------------------------

// async function final(){
//     try{
//         fetch("https://fakestoreapi.com/products").then((res)=>{
//             res.json().then((output)=>{
//                 console.log("try-->",output)
//             })
//         })
//     }catch(error){
//         console.log("problem bye",error)
//     }finally{
//         console.log("Final will work if try or catch work")
//         console.log("uses: reset the data  ,  connection established and final connection closed")
//     }
// }
// final()