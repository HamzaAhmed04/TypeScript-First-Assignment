// conditional-tests.ts

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

console.log("Is car starts with 's'? I predict True.");
console.log(car.startsWith('s'));

console.log("Is car ends with 'u'? I predict True.");
console.log(car.endsWith('u'));