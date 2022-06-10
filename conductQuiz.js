const { createQuiz } = require('./src/createQuiz.js');
const { registerResponse } = require('./src/quizLib.js');

const main = () => {
  const quiz = createQuiz();

  console.log(quiz.getQuestion());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', userAnswer => {
    registerResponse(quiz, userAnswer, console.log);
  });
};

main();
