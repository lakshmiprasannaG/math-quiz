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

class Mul {
  #operands;
  constructor(operands) {
    this.#operands = operands;
  }

  evaluate() {
    return this.#operands.reduce((context, operand) => context * operand, 1);
  }

  asString() {
    return this.#operands.join('*');
  }
}

class Div {
  #operands;
  constructor(operands) {
    this.#operands = operands;
  }

  evaluate() {
    const result = this.#operands.reduce((operand1, operand2) => {
      return operand1 / operand2;
    });

    return +result.toFixed(2);
  }

  asString() {
    return this.#operands.join('/');
  }
}

module.exports = { Add, Sub, Mul, Div };
