function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];

  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }

  return great_magicians;
}

let magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
let great_magicians: string[] = make_great(magicians);

show_magicians(great_magicians);