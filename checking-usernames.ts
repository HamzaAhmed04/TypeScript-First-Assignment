let current_users: string[] = ['kamran khan tessori', 'daniyal nagori', 'zia khan', 'Hamz Ahmed Shaikh'];
let new_users: string[] = ['jane', 'peter', 'alice', 'tom', 'sarah'];

for (let new_user of new_users) {
  let isUsed = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());

  let message = isUsed
    ? `Sorry, the username '${new_user}' is already taken. Please choose a different username.`
    : `The username '${new_user}' is available.`;

  console.log(message);
}