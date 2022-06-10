class Add {
  #operands;
  constructor(operands) {
    this.#operands = operands;
  }

  evaluate() {
    return this.#operands.reduce((context, operand) => context + operand, 0);
  }

  asString() {
    return this.#operands.join('+');
  }
}

class Sub {
  #operands;
  constructor(operands) {
    this.#operands = operands;
  }

  evaluate() {
    return this.#operands.reduce((operand1, operand2) => operand1 - operand2);
  }

  asString() {
    return this.#operands.join('-');
  }
}

module.exports = { Add, Sub };
