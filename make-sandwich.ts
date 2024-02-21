function make_sandwich(...items: string[]): void {
  console.log("Sandwich order:");
  for (let item of items) {
    console.log("- " + item);
  }
}

make_sandwich('Bread', 'Cheese', 'Ham');
make_sandwich('Bread', 'Turkey');
make_sandwich('Bread', 'Lettuce', 'Tomato', 'Mayonnaise');