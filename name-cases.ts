// name-cases.ts

const personName: string = 'Hamza Ahmed Shaikh';

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
}