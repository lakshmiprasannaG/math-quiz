const fs = require('fs');

const userAnswer = (fileName) => {
  const content = fs.readFileSync(fileName, 'utf8');
  return content.split('\n').slice(-1).join('');
};

const assertUserAnswer = ({ userAnswer, answer }) => {
  return parseInt(userAnswer) === answer;
};

const question = () => {
  const firstNumber = 1;
  const secondNumber = 2;
  const operator = '+';

  return firstNumber + operator + secondNumber;
};

const conductQuiz = () => {
  const round = {};
  round.question = question();

  console.log(round.question);

  round.answer = eval(round.question);
  fs.watch('./userAnswer.js', (eventType, fileName) => {
    round.userAnswer = userAnswer(fileName);
    round.result = assertUserAnswer(round);
    console.log(round);
  });
};

conductQuiz();
