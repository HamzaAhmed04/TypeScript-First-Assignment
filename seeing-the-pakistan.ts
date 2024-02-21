// seeing-the-world.ts

const places: string[] = ['Karachi', 'Lahore', 'Faisalabad', 'Islamabad'];

console.log("Original order:");
console.log(places);

console.log("Alphabetical order:");
console.log([...places].sort());

console.log("Original order (still):");
console.log(places);

console.log("Reverse alphabetical order:");
console.log([...places].sort().reverse());

console.log("Original order (still):");
console.log(places);

places.reverse();
console.log("Reversed order:");
console.log(places);

places.reverse();
console.log("Original order (again):");
console.log(places);

console.log("Alphabetical order:");
console.log([...places].sort());

console.log("Reverse alphabetical order:");
console.log([...places].sort().reverse());