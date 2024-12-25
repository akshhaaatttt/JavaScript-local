// Immediately Invoked Function Expression (IIFE)


(function batman(){
    //named iife
    console.log(`DB connected`);   
})();// semicolon is used to end the statement
// important to end the function with semicolon

// () functions define first paranthesis mai krte hai
// () function call krne ke liye second paranthesuis use kiya hai
// ***************IIFE****************
// globle scope ke pollution se bachne ke liye IIFE use hota hai

((name) => {
    //simple iife
    console.log(`DB connected two  ${name}`);   
})('batman');