// For of loop

// ["","",""] array which containd 3 empty strings
// [{},{},{}] arry which contains 3 empty objects

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
    
}

// Maps : it is used for the unique key value pairs

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);
//  for (const key of map) {
 for (const [key, value] of map) {
    console.log(key, ':-', value);
    
 }

 const myObject = {
    'game1' : 'NFS',
    'game2' : 'FIFA',
 }

 for (const [key,value] of myObject) {
    console.log(key, ':-', value);
    
 }