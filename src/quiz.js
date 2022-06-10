class Quiz {
  #questions;
  #currentIndex;
  #results;

  constructor(questions) {
    this.#questions = questions;
    this.#currentIndex = 0;
  }

  getQuestion() {
    return this.#questions[this.#currentIndex].asString();
  }

  fillAnswer(userAnswer) {
    this.#questions[this.#currentIndex].fillAnswer(userAnswer);
    this.#currentIndex++;
  }

  isDone() {
    return this.#questions.every(question => question.isAnswered());
  }

  getResults() {
    this.#results = [];
    this.#questions.forEach(question => {
      this.#results.push(question.getStats());
    });
    return this.#results;
  }
}

module.exports = { Quiz };
