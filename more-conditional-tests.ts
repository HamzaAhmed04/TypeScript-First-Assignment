// more-conditional-tests.ts

let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

console.log("Is fruit.toLowerCase() == 'APPLE'? I predict False.");
console.log(fruit.toLowerCase() == 'APPLE');

console.log("Is fruit.toLowerCase() != 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() != 'APPLE');

console.log("Is fruit.length > 5? I predict False.");
console.log(fruit.length > 5);

console.log("Is fruit.length <= 10? I predict True.");
console.log(fruit.length <= 10);

console.log("Is fruit.includes('p')? I predict True.");
console.log(fruit.includes('p'));

console.log("Is fruit.includes('banana')? I predict False.");
console.log(fruit.includes('banana'));

console.log("Is fruit.charAt(0) == 'a'? I predict True.");
console.log(fruit.charAt(0) == 'a');

console.log("Is fruit.charAt(1) == 'p'? I predict True.");
console.log(fruit.charAt(1) == 'p');