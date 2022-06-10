const assert = require('assert');
const { Question } = require('./../src/question.js');
const { Add } = require('./../src/operations.js');

describe('Question', () => {
  it('should give the question for given operation', () => {
    const add = new Add([1, 2]);
    const question = new Question(add);
    assert.strictEqual(question.asString(), '1+2');
  });

  it('should give stats for a question, after taking user response', () => {
    const add = new Add([1, 2]);
    const question = new Question(add);
    question.fillAnswer(3);
    const expected = {
      question: '1+2',
      correctAnswer: 3,
      userAnswer: 3,
      result: true
    };

    assert.deepStrictEqual(question.getStats(), expected);
  });
});
