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

rl.question(QUESTIONS[0], (answer1) => {
  rl.question(QUESTIONS[1], (answer2)  => {
    rl.question(QUESTIONS[2], (answer3) => {
      rl.question(QUESTIONS[3], (answer4) => {
        rl.question(QUESTIONS[4], (answer5) => {
          rl.question(QUESTIONS[5], (answer6) => {
            rl.question(QUESTIONS[6], (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});