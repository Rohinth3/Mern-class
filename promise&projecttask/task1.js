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

// const butDiv1 = document.getElementById('buttonDiv1')
// const updateName = document.getElementById('updateName')
// const updateAge = document.getElementById('updateAge')
// const updateEmail = document.getElementById('updateEmail')
// const updateDept = document.getElementById('updateDept')

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
        console.log(this.user)
        NameDiv.value = ''
        AgeDiv.value = ''
        EmailDiv.value = ''
        DeptDiv.value = ''

    }
    getuser(){

    }
    updateuser(){
        
    }

}
obj = new UserRegistration();

butDiv.addEventListener("click",()=>{
    obj.adduser(NameDiv,AgeDiv,EmailDiv,DeptDiv)
   
})


    