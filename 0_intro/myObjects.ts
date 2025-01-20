type User = {
    name: string,
    email: string,
    isActive: boolean

}

function createUser(user: User):User{
    return user
}

createUser({name:"Hasan",email:"hasan@gmail.com",isActive:true})



type myUser = {
    readonly _id: string,
    name:string,
    email:string,
    isActive: boolean,
    creditCardDetails?:number //it is optional
}

let newUser: myUser = {
    _id:"12345",
    name:"hasan",
    email:"hasan@gmail.com",
    isActive:false,
    
}

newUser.email="hasan16habib@gmail.com"
newUser._id="54463474" //see there is an error cause id is readonly property
export{}