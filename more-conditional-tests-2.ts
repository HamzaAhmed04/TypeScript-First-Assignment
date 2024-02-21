// conditional-tests.ts

let name1 = 'kamran khan tessori';
console.log(name1 === 'kamran khan tessori'); // True
console.log(name1 !== 'daniyal nagori'); // True

let name2 = 'zia khan';
console.log(name2.toLowerCase() === 'zia khan'); // True
console.log(name2.toLowerCase() === 'kamran khan tessori'); // False

let age1 = 25;
console.log(age1 === 25); // True
console.log(age1 !== 30); // True
console.log(age1 > 18); // True
console.log(age1 < 30); // True
console.log(age1 >= 25); // True
console.log(age1 <= 25); // True

let age2 = 20;
console.log(age2 > 18 && age2 < 25); // True
console.log(age2 > 18 || age2 > 25); // True

let people = ['kamran khan tessori', 'daniyal nagori', 'zia khan'];
console.log(people.includes('zia khan')); // True
console.log(people.includes('usman ali')); // False

console.log(!people.includes('kamran khan tessori')); // False
console.log(!people.includes('daniyal nagori')); // True