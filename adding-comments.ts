// Program: Stripping Names
// Author: Your Name
// Date: February 21, 2024
// Description: This program demonstrates how to remove whitespace characters from a person's name.

// Store a person's name with whitespace characters at the beginning and end of the name
const personName: string = '\t   Hamza Ahmed Shaikh\n';

// Print the original name with whitespace
console.log(`Original Name: "${personName}"`);

// Strip the white spaces using the trim() function and print the name again
console.log(`Stripped Name: "${personName.trim()}"`);

// Program: Favorite Number
// Author: Your Name
// Date: February 21, 2024
// Description: This program reveals the author's favorite number.

// Store the author's favorite number
const favoriteNumber: number = 22;

// Create a message that reveals the favorite number using the variable
const message: string = `My favorite number is ${favoriteNumber}.`;

// Print the message
console.log(message);