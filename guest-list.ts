// guest-list.ts

const guestList: string[] = ['Kamran Khan Tessori', 'Zia Khan', 'Daniyal Nagori'];

const invitations = guestList.map(guest => {
  const highlightedName = `🌟 ${guest} 🌟`;
  const underline = '━'.repeat(highlightedName.length);
  let message = `Dear ${highlightedName},\n\nI am trying to become one of your best students, and I am putting in a lot of effort to achieve that. I hope to catch your attention soon.\n\nBest regards,\nHamza Ahmed Shaikh`;

  return `${underline}\n${message}\n${underline}\n`;
});

console.log(invitations.join(''));