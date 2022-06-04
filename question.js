const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const sub = (firstNumber, secondNumber) => firstNumber - secondNumber;

const operations = {
  '+': add,
  '-': sub
};

class Question {
  #operands;
  #operator;
  constructor(operator, ...operands) {
    this.#operands = operands;
    this.#operator = operator;
  }

  question() {
    return this.#operands.join(this.#operator);
  }

  #answer() {
    const operation = operations[this.#operator];
    return this.#operands.reduce(operation);
  }

  assertAnswer(answer) {
    return this.#answer() === parseInt(answer);
  }
}

exports.Question = Question;
