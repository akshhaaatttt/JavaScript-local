//singleton: constructor se agr koi object banate hai to vo singleton hota hai
// agr literals se object define krte hai to singleton nhi banega
//Object.create()

// Object Literals
//Declaration of symbol

const mySym = Symbol("Key1")
const Jsuser = {
    name: "Akshat",
    "full name": "Akshat Jain",
    [mySym]: "myKey1",//if i will not apply the square bracket then it will not work like symbol
    age: 18,
    location: "jaipur",
    email: "akshat@google.com",
    isLoggedIn: false,
    lastLogiDays: ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// //console.log(Jsuser.full name); not able to print the full name now it will only be printed by use of [] this brackets 
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);//I can only use it as a symbol by applying square bracket
// //console.log(typeof Jsuser[mySym]);


Jsuser.email = "akshat@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "akshat@yahoo.com"

//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
