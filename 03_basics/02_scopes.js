var c = 300/*global scope value is defined for every one */
let a = 300


if(true){/*block scope the value should remains under this scope only */
    let a = 10
    const b = 20
    //console.log("Inner: ",a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){

    const username = "batman"

    function two(){ // nested function mai scope ke bahar isko access nahi kar sakte par main function ko access kar sakte hai
        const website = "batman.com"
        // console.log(username);
        // console.log(website);
        
    }
    // console.log(website);

    two()
    
    
}
one()

if (true){
    const username = "batman"
    if(username === "batman"){
        const website = " batman.com"
        console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);


//+++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)
