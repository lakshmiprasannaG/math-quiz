const { Question } = require('./question.js');

const fs = require('fs');

const getUserAnswer = (fileName) => {
  const content = fs.readFileSync(fileName, 'utf8');
  return content.split('\n').slice(-1).join('');
};

const conductQuiz = () => {
  const operands = [1, 2, 3, 4];
  const operator = '+';
  const question = new Question(operator, ...operands);

  console.log(question.question());

  fs.watch('./userAnswer.js', (eventType, fileName) => {
    const userAnswer = getUserAnswer(fileName);
    const result = question.assertAnswer(userAnswer);
    console.log(result);
  });
};

conductQuiz();
