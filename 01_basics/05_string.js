const name = "batman"
const repoCount = 50

//console.log(name + repoCount + "value");

//new pattern to write a string

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('akshat-jain')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-10, 2)
console.log(anotherString);

const newString1 = "     akshy    "
console.log(newString1);
console.log(newString1.trim());

const unique = "htps://akshat.com/akshat%15jain"

console.log(unique.replace('%15', '_'))

console.log(unique.includes('aksh'))

console.log(gameName.split('-'));
