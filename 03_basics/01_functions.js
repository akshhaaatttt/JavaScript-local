
function sayMyName(){
console.log("A");
console.log("k");
console.log("s");
console.log("h");
console.log("a");
console.log("t");
}
//sayMyName()

// function addTwoNumbers(number1,number2/*parameter*/){
//    console.log( number1+number2);
   
// }

// addTwoNumbers(10,11/*arguments*/)
// addTwoNumbers(10,"11")
// addTwoNumbers(10,"A")
// addTwoNumbers(10,null)

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function addTwoNumbers(number1,number2/*parameter*/){

    // let result = number1+number2
    // return result

    // return number1+number2

 }
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username = "ironman"){
    if /*(username === undefined)*/
        (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Batman"));
// console.log(loginUserMessage());//undefined

function calculateCartPrice/*/(...num1)*/(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username: "batman",
    prices: 199 
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "superman",
    price: 399
})

const myNewArray = [200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([
    200,400,600,100]));
