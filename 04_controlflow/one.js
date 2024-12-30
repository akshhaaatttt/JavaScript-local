//IF
const isUserloggedIn = true;

if(isUserloggedIn){
    console.log("hy");
    
}
else{

}

const score = 200

//var is global variable and it is accessable outside the block

// if (score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);
//console log high
// viva question


const balance = 1000

// if(balance > 500) console.log("test"); //implicit scope

// if (balance < 500){
//     console.log("less than");    
// }

// else if (balance < 750){
//     console.log("less than 750");
    
// }
// else if (balance < 900){
//     console.log("less than 900");
    
// }
// else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitcard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");    
}

