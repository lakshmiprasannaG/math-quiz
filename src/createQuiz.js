const { Question } = require('./question.js');
const { Quiz } = require('./quiz.js');
const { Add, Sub } = require('./operations.js');

const randomOperator = number => Math.floor(Math.random() * number);

const operation = () => {
  const operands = [1, 2];
  const add = new Add(operands);
  const sub = new Sub(operands);
  const operations = [add, sub];
  return operations[randomOperator(2)];
};

const createQuiz = () => {
  const question1 = new Question(operation());
  const question2 = new Question(operation());

  const questions = [question1, question2];

  return new Quiz(questions);
};

module.exports = { createQuiz };
