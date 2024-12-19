// arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["batman","shaktiman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
//shallow copy : A shallow copy of an object is a copy whose properties share the same referances

// Deep copy : A deep copy of an object is a copy whose properties do not share the same reference 

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(11)
//console.log(myArr);
// myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

// const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);

// slice, splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);

