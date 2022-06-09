const { Question } = require('./question.js');
const { Quiz } = require('./quiz.js');

const randomOperator = number => Math.floor(Math.random() * number);

const getOperator = () => {
  const operators = ['+', '-', '*', '/'];
  return operators[randomOperator(4)];
};

const createQuiz = () => {
  const operands = [1, 2];

  const question1 = new Question(getOperator(), ...operands);
  const question2 = new Question(getOperator(), ...operands);
  const question3 = new Question(getOperator(), ...operands);

  const questions = [question1, question2, question3];

  return new Quiz(questions);
};

const main = () => {
  const quiz = createQuiz();

  console.log(quiz.getQuestion());

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', userAnswer => {
    quiz.fillAnswer(userAnswer.trim());

    if (quiz.isQuizDone()) {
      console.log(quiz.getResults());
      process.stdin.destroy();
      return;
    }

    console.log(quiz.getQuestion());
  });
};

main();
