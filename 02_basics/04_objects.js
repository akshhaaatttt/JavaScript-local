// const tinderUser = new Object() //singleton object 
const tinderUser = {}//non singleton object

tinderUser.id= "123abd"
tinderUser.name = "tom"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "batman@marvel.com",
    fullname:{
        userfullname:{
            firstname: "akshat",
            lastname: "jain"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}// ... is a spread operator it is used to spread the object and it will store the values of obj1 and obj2 in obj3 
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//this propert is used to find something in the object
console.log(tinderUser.hasOwnProperty('isLogged'));


