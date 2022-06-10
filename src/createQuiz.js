const { Question } = require('./question.js');
const { Quiz } = require('./quiz.js');
const { Add, Sub, Mul, Div } = require('./operations.js');

const randomNum = number => Math.floor(Math.random() * number);

const operation = () => {
  const operands = [randomNum(99), randomNum(99)];

  const add = new Add(operands);
  const sub = new Sub(operands);
  const mul = new Mul(operands);
  const div = new Div(operands);

  const operations = [add, sub, mul, div];
  return operations[randomNum(4)];
};

const createQuiz = () => {
  const question1 = new Question(operation());
  const question2 = new Question(operation());
  const question3 = new Question(operation());

  const questions = [question1, question2, question3];

  return new Quiz(questions);
};

module.exports = { createQuiz };
