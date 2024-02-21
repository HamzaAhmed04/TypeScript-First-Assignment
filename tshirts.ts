function make_shirt(size: string, message: string): void {
  console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}

make_shirt("Large", "I love coding!");

function make_shirt(size: string = 'L', message: string = 'I love TypeScript') {
  console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt(); // Large shirt with default message
make_shirt('M'); // Medium shirt with default message
make_shirt('XL', 'Custom message'); // Custom-sized shirt with custom message