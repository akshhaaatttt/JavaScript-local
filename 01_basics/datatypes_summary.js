// Primitive :- 7types
/*
1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. Bigint
*/

const score = 100
const scoreValue = 400.25

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 1326646124244515787865465464646849n

// Reference (Non Primitive)

// Arrays, Objests , Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "akshat",
    age: 18,
}

const myFunction = function () {
    console.log("hy there");   
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)


//*************************************** */

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "akshat_batmannnn"

let anothername = myYoutubename
anothername = "chai pio biskit khao"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "akshat@batman.com",
    upi: "user@sbi",
}

let user2 = user1

user2.email = "jain@google.com"

console.log(user1.email);
console.log(user2.email);

