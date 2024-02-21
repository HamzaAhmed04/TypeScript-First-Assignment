// best-students-list.ts

const bestStudentsList: string[] = ['Kamran Khan Tessori', 'Zia Khan', 'Daniyal Nagori'];

console.log("Good news! You are one of our best students.");

bestStudentsList.unshift('Eve');
bestStudentsList.splice(Math.floor(bestStudentsList.length / 2), 0, 'Frank');
bestStudentsList.push('Grace');

for (const student of bestStudentsList) {
  console.log(`Dear ${student}, you are cordially invited for onsite. Please RSVP.`);
}

console.log("Oops! We can only invite two students for onsite.");

while (bestStudentsList.length > 2) {
  const removedStudent = bestStudentsList.pop();
  console.log(`Sorry ${removedStudent}, we can't invite you for onsite.`);
}

for (const student of bestStudentsList) {
  console.log(`Dear ${student}, you are still invited for onsite. Please RSVP.`);
}

bestStudentsList.length = 0; // Empty the list

console.log(bestStudentsList);