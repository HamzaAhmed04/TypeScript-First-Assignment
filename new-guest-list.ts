// new-guest-list.ts

const guestList: string[] = ['Alice', 'Bob', 'Charlie'];
const guestWhoCantMakeIt: string = guestList.pop()!;

console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

guestList.push('David');

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please RSVP.`);
}

console.log(`Second set of invitation messages:`);

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please RSVP.`);
}