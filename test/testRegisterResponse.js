const assert = require('assert');

const { registerResponse } = require('./../src/quizLib.js');
const { Quiz } = require('./../src/quiz.js');
const { Question } = require('./../src/question.js');
const { Add, Div } = require('./../src/operations.js');

describe('registerResponse', () => {
  it('should give the next question', () => {
    const div = new Div([1, 2]);
    const add = new Add([1, 2]);

    const question1 = new Question(div);
    const question2 = new Question(add);

    const quiz = new Quiz([question1, question2]);

    const actual = [];
    const logger = text => actual.push(text);

    registerResponse(quiz, '3', logger);
    assert.deepStrictEqual(actual, ['1+2']);
  });

  it('should give the results after quiz is done', () => {
    const div = new Div([1, 2]);

    const question1 = new Question(div);

    const quiz = new Quiz([question1]);

    const actual = [];
    const logger = text => actual.push(text);

    registerResponse(quiz, '0.5', logger);
    assert.deepStrictEqual(actual[0], [
      { question: '1/2', correctAnswer: 0.5, userAnswer: 0.5, result: true }
    ]);
  });
});
