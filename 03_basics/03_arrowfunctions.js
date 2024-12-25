const user = {
    username: "batman",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "superman"
// user.welcomeMessage()

// console.log(this);


// function chai(){// main functions mai this use nhi kr sakta hu this sirf object mai use hota hai
//     let username = "batman" 
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "batman" 
    console.log(this);

} 
// chai()

// () => {} // syntax of arrow function

//const addTwo = (num1,num2) => num1 + num2 // single line mai return karne ke liye return keyword ki zarurat nahi hoti hai // implesit return

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)) 

// const myArray = [1,2,3,4,5,6,7,8,9,10]

// myArray.forEach()