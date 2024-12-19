const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Akshat"))
console.log(Array.from("Akshat"))
console.log(Array.from({name: "Akshat"}))//intresting case of array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
