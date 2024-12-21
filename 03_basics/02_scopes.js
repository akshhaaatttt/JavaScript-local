var c = 300/*global scope value is defined for every one */
let a = 300


if(true){/*block scope the value should remains under this scope only */
    let a = 10
    const b = 20
    console.log("Inner: ",a);
    
}


console.log(a);
// console.log(b);
// console.log(c);


