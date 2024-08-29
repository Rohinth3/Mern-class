// /// Student registation

// add new student 
// name,age,phonenumber, address(city,state,country), department (ece,eee,mech)

// get all students - should show all the added students
// update student some unique id or email id
// delete student with some unique id or email id

const MainDiv = document.getElementById('mainDiv')

const butDiv = document.getElementById('buttonDiv')

const NameDiv = document.getElementById('nameDiv')
const AgeDiv = document.getElementById('ageDiv')
const EmailDiv = document.getElementById('emailDiv')
const DeptDiv = document.getElementById('deptDiv')


class UserRegistration{
    constructor(){
        this.user = []
    }

    adduser(name,age,email,dept){
        console.log(NameDiv,AgeDiv,EmailDiv,DeptDiv)
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
    