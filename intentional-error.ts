// intentional-error.ts

let numbers = [1, 2, 3];

try {
  console.log(numbers[3]);
} catch (error) {
  console.error('An index error occurred:', error.message);
}

console.log('Program continues...');