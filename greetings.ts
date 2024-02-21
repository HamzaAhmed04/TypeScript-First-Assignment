// greetings.ts

const names: string[] = ['Kamran Khan Tessori', 'Zia Khan', 'Daniyal Nagori'];

const reset = "\x1b[0m";
const bold = "\x1b[1m";
const italic = "\x1b[3m";
const yellow = "\x1b[33m";
const cyan = "\x1b[36m";

names.forEach(name => {
  console.log(`${bold}${italic}Hello, ${yellow}${name}${reset}${bold}! How are you today?${reset}`);
});