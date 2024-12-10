//                                          1 VAR  for loop using setTImeout function()

// for(j=0;j<3;j++){
//     setTimeout(()=> {
//     console.log("VAR SCOPE->",j)
//   }, 100);
//   } 
// //  o/p: 333
// ////  The output shows 3 three times because of how JavaScript's setTimeout and variable scoping work with var or function-scoped variables like i in the for loop.

// // // Explanation:
// //      * synchronous Nature of setTimeout: The setTimeout function schedules a callback to be executed after a given delay. 
// //          However, it doesn't immediately execute the function—it queues it for later.
// //     * var Scoping: The loop variable i is declared using var (implicitly when not using let or const), 
// ///         which has function scope. By the time the callbacks queued by setTimeout are executed, the for loop has completed, 
// ///         and the value of i is 3.
// ///   * So when the setTimeout callback functions run (100 ms later), they all reference the same i, which is now 3.

// for(i=0;i<=3;i++){
//     setTimeout(()=> {
//     console.log("VAR SCOPE->",i)
//   }, 100);
//   } 
//  o/p: 444 The output shows 4 three times
// //// -------------------------------------------------------------------------
// // //incase let scope 
// for(let i=0;i<3;i++){
//     setTimeout(()=> {
//     console.log("LET SCOPE->",i)
//   }, 100);
//   } 
// // //  o/p: 012  let is blocked scope 
// // Use let instead of var for i, which creates a block-scoped variable for each iteration of the loop. 
// // This way, each callback captures a unique value of i.
//// --------------------------------------------------------------------------------------------------------------------------
////                             2. setInterval()  -> to show the display output with particular minutes 
//// eg: 2000(2mins) HI --. o/p: HI [after 2mins] HI [after 2mins] Hi

// setInterval(() => {
//     console.log("HI")
//     console.log("Hello")
// },2000);
//// --------------------------------------------------------------------------------------------------------------------------
    


