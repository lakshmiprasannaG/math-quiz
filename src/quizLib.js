const registerResponse = (quiz, userAnswer, logger) => {
  quiz.fillAnswer(userAnswer.trim());

  if (quiz.isDone()) {
    logger(quiz.getResults());
    process.stdin.destroy();
    return;
  }

  logger(quiz.getQuestion());
};

module.exports = { registerResponse };
