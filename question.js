const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const sub = (firstNumber, secondNumber) => firstNumber - secondNumber;
const mul = (firstNumber, secondNumber) => firstNumber * secondNumber;
const div = (firstNumber, secondNumber) => firstNumber / secondNumber;

const operations = {
  '+': add,
  '-': sub,
  '*': mul,
  '/': div
};

class Question {
  #operands;
  #operator;
  #userAnswer;
  #question;
  constructor(operator, ...operands) {
    this.#operands = operands;
    this.#operator = operator;
    this.#question = null;
    this.#userAnswer = null;
  }

  #createQuestion() {
    return this.#operands.join(this.#operator);
  }

  asString() {
    this.#question = this.#createQuestion();
    return this.#question;
  }

  #answer() {
    const operation = operations[this.#operator];
    return +this.#operands.reduce(operation).toFixed(2);
  }

  fillAnswer(userAnswer) {
    this.#userAnswer = +userAnswer;
  }

  assertAnswer(answer) {
    return this.#answer() === answer;
  }

  getStats() {
    return {
      question: this.#question,
      answer: this.#answer(),
      userAnswer: this.#userAnswer,
      result: this.assertAnswer(this.#userAnswer)
    };
  }
}

exports.Question = Question;
