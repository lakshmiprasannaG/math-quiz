class Question {
  #operation;
  #userAnswer;
  constructor(operation) {
    this.#operation = operation;
    this.#userAnswer = null;
  }

  asString() {
    return this.#operation.asString();
  }

  fillAnswer(userAnswer) {
    this.#userAnswer = +userAnswer;
  }

  isAnswered() {
    return this.#userAnswer !== null;
  }

  #correctAnswer() {
    return this.#operation.evaluate();
  }

  #assertAnswer(answer) {
    return this.#correctAnswer() === answer;
  }

  getStats() {
    return {
      question: this.asString(),
      correctAnswer: this.#correctAnswer(),
      userAnswer: this.#userAnswer,
      result: this.#assertAnswer(this.#userAnswer)
    };
  }
}

exports.Question = Question;
