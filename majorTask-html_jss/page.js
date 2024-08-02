
{/* <div style="display: flex;height:300px;width:300px;background-color: green;border: 2px solid grey;margin-bottom: 20px;"></div> */}
    
let users = [
    {
        name: "Rohinth",
        age: 25,
        email: "rohinth203k@gmail.com"
    },
    {
        name: "Alice",
        age: 30,
        email: "alice@example.com"
    },
    {
        name: "Bob",
        age: 28,
        email: "bob@example.com"
    },
    {
        name: "Charlie",
        age: 35,
        email: "charlie@example.com"
    },
    {
        name: "David",
        age: 22,
        email: "david@example.com"
    },
    {
        name: "Eve",
        age: 29,
        email: "eve@example.com"
    },
    {
        name: "Frank",
        age: 31,
        email: "frank@example.com"
    },
    {
        name: "Grace",
        age: 27,
        email: "grace@example.com"
    },
    {
        name: "Hank",
        age: 33,
        email: "hank@example.com"
    },
    {
        name: "Ivy",
        age: 26,
        email: "ivy@example.com"
    },
    {
        name: "Jack",
        age: 34,
        email: "jack@example.com"
    },
    {
        name: "Karen",
        age: 32,
        email: "karen@example.com"
    },
    {
        name: "Leo",
        age: 24,
        email: "leo@example.com"
    },
    {
        name: "Jack",
        age: 23,
        email: "mia@example.com"
    },
    {
        name: "Nina",
        age: 21,
        email: "nina@example.com"
    }
];

const mainDiv = document.getElementById('htmlDiv')

const mapResult = users.map((i)=> {
    const userDiv = document.createElement('div')
    userDiv.style.marginBottom = "20px"
    userDiv.style.height = "300px"
    userDiv.style.width = "300px"
    userDiv.style.backgroundColor = "orange"
    userDiv.style.border = "2px solid grey"
    userDiv.style.fontSize = "large"
    userDiv.style.color = "black"
    userDiv.innerHTML = `
                <p>Name: ${i.name}</p>
                <p>Age: ${i.age}</p>
                <p>Email: ${i.email}</p>
                `
    // mainDiv.append(userDiv)                      This one also use but it is old format
    // return i
    return userDiv
})
                // // why spread operator used (...mapResult)
                // //users[i](array)-->into--> userDiv(div) == mapResult is moving to another variable so used spread operator
                // users(i)-->[{name,age,email}]    
                // userDiv(div) --> users array are inside the boxes |_|-->
                // mapResult using spread operator  [users[{}] and userDiv(box) to add in mapResult=[{}]]
mainDiv.append(...mapResult)
console.log("mapResult:",mapResult)



// for(i of users){
//     const userDiv = document.createElement('div')
//     userDiv.style.marginBottom = "20px"
//     userDiv.style.height = "300px"
//     userDiv.style.width = "300px"
//     userDiv.style.backgroundColor = "green"
//     userDiv.style.border = "2px solid grey"
//     userDiv.style.fontSize = "large"
//     userDiv.style.color = "black"
//     userDiv.innerHTML = `<p>Name: ${i.name}</p><p>Age: ${i.age}</p><p>Email: ${i.email}</p>`
//     mainDiv.append(userDiv)
// }



//28/07/2024
// // 1st
const inputDiv1 = document.getElementById('inputDiv')
// console.log(inputDiv1)

// //2nd
const buttonDiv1 = document.getElementById('buttonDiv')
// console.log(buttonDiv1)

// //3rd
buttonDiv1.addEventListener('click',() => {
    // console.log("This is test",inputDiv1.value)
    // //4th
    // inputDiv1.value -> eg : Rohinth[name]
    let searchString = inputDiv1.value

    //last one 
    if(searchString != ''){
        // console.log("searchString:",searchString)

        // // 5th
    let output = users.filter((i) => {
        if(i.name.includes(searchString)){
            return i
        }
    })
    
    console.log("output",output)
    // //6th
    if(output.length > 0){
        mainDiv.innerHTML = ''
        for(i of output){
                const userDiv = document.createElement('div')
                userDiv.style.marginBottom = "20px"
                userDiv.style.height = "300px"
                userDiv.style.width = "300px"
                userDiv.style.backgroundColor = "orange"
                userDiv.style.border = "2px solid grey"
                userDiv.style.fontSize = "large"
                userDiv.style.color = "black"
                
                userDiv.innerHTML = `   <p>Name: ${i.name}</p>
                                        <p>Age: ${i.age}</p>
                                        <p>Email: ${i.email}</p>
                                    `
                mainDiv.append(userDiv)
        }
    }
    else{
        mainDiv.innerHTML = ''
        mainDiv.innerHTML = '<p>There is no user !!!</p>'
    }
    }
    else{
        for(i of users){
            const userDiv = document.createElement('div')
            userDiv.style.marginBottom = "20px"
            userDiv.style.height = "300px"
            userDiv.style.width = "300px"
            userDiv.style.backgroundColor = "orange"
            userDiv.style.border = "2px solid grey"
            userDiv.style.fontSize = "large"
            userDiv.style.color = "black"
            
            userDiv.innerHTML = `   <p>Name: ${i.name}</p>
                                    <p>Age: ${i.age}</p>
                                    <p>Email: ${i.email}</p>
                                `
            mainDiv.append(userDiv)
    }
    }
    
    
    
})


    // // 5th

