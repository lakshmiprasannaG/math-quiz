const { createQuiz } = require('./createQuiz.js');

const main = () => {
  const quiz = createQuiz();

  console.log(quiz.getQuestion());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', userAnswer => {
    registerResponse(quiz, userAnswer);
  });
};

const registerResponse = (quiz, userAnswer) => {
  quiz.fillAnswer(userAnswer.trim());

  if (quiz.isQuizDone()) {
    console.log(quiz.getResults());
    process.stdin.destroy();
    return;
  }

  console.log(quiz.getQuestion());
};

main();
