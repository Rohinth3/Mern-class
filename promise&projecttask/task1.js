// /// Student registation

// add new student 
// name,age,phonenumber, address(city,state,country), department (ece,eee,mech)

// get all students - should show all the added students
// update student some unique id or email id
// delete student with some unique id or email id

// const MainDiv = document.getElementById('mainDiv')

const butDiv = document.getElementById('buttonDiv')
const NameDiv = document.getElementById('nameDiv')
const AgeDiv = document.getElementById('ageDiv')
const EmailDiv = document.getElementById('emailDiv')
const DeptDiv = document.getElementById('deptDiv')


const upButton  = document.getElementById('buttonDiv1')


// // const upName = document.getElementById('updateName')
const age1 = document.getElementById('updateAge')
const email1 = document.getElementById('emailDiv')
// // const upDept = document.getElementById('deptDiv')


class UserRegistration{
    /// constructor automatically assign
    constructor(){
        this.user = [
            // {                              like this it will perform
            //     name: "rohinth",
            // }
            // {
            //     name : "suresh",
            // }
        ]
    }

    adduser(name,age,email,dept){
        let userObj = {
            "name"  : NameDiv.value,
            "age"   : AgeDiv.value,
            "email" : EmailDiv.value,
            "dept"  : DeptDiv.value
        }
        // console.log(NameDiv.value,AgeDiv.value,EmailDiv.value,DeptDiv.value)
        // console.log(userObj)

        this.user.push(userObj)
        console.log("After user added:",this.user)
        NameDiv.value = ''
        AgeDiv.value = ''
        EmailDiv.value = ''
        DeptDiv.value = ''

    }
    getuser(){
        console.log("All get Users",this.user);
    }
    updateuser(){
        // let age1 = document.getElementById('updateAge')
        // let email1 = document.getElementById('emailDiv')
        let agevalue = age1.value.trim()
        let emailvalue = email1.value.trim().toLowerCase()
        for(let i of this.user){
            console.log("Checking user email:",i.email)
            if(i['email']== emailvalue){
                i.age = agevalue
                // this.user.push(userObj)
                console.log(`Updating user:`,i);
                age1.value =''
                email1.value = ''
                // return;
            }
        }
        console.log("user not found")
        
    }

}
obj = new UserRegistration();

butDiv.addEventListener("click",() => {
    obj.adduser(NameDiv,AgeDiv,EmailDiv,DeptDiv);
    obj.getuser()
});


upButton.addEventListener('click', () => {
    obj.updateuser();
});




// //adduser(){
// //obj.adduser()
//     output :    this one also working same thing
//     age
//     : 
//     "25"
//     dept
//     : 
//     "ECE"
//     email
//     : 
//     "rohinth2014@gmail.com"
//     name
//     : 
//     "Rohinth"