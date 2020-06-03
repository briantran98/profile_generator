const readline = require('readline');
const QUESTIONS = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

// const askQuestion = (question) => {
//   rl.question(question, (answer) => {
//   });
// }

// const questionare = () => {
//   let count = 0;
//   const answers = [];
//   for (const question of QUESTIONS) {
//     count++;
//     answers.push(askQuestion(question));
//   }
//   if(count > QUESTIONS.length) {
//     rl.close();
//   }
// }

// questionare();