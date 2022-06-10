const assert = require('assert');

const { Quiz } = require('./../src/quiz.js');
const { Question } = require('./../src/question.js');
const { Sub, Mul, Div } = require('./../src/operations.js');

describe('Quiz', () => {
  it('should give the question', () => {
    const sub = new Sub([3, 2]);
    const question = new Question(sub);
    const quiz = new Quiz([question]);

    assert.strictEqual(quiz.getQuestion(), '3-2');
  });

  it('should give the question', () => {
    const mul = new Mul([1, 2]);
    const question = new Question(mul);
    const quiz = new Quiz([question]);

    quiz.fillAnswer(2);

    const expected = [{
      question: '1*2',
      correctAnswer: 2,
      userAnswer: 2,
      result: true
    }];

    assert.deepStrictEqual(quiz.getResults(), expected);
  });

  it('should return true when quiz is done', () => {
    const div = new Div([1, 2]);
    const question = new Question(div);
    const quiz = new Quiz([question]);

    quiz.fillAnswer(2);

    assert.strictEqual(quiz.isDone(), true);
  });
});
