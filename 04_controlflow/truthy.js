const userEmail = []//""//bat@batman.avg"

if (userEmail) {
    // console.log("Got user email");
    
} else{
    // console.log("Don't have user email");
    
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}
// Object.keys(emptyObj) : this is used to make a object as a Array

//false == 0:- true
//false == '':- true
//0 == '':- true

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10





console.log(val1);
