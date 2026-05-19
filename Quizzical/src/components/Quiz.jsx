import Question from './Question';

function Quiz({
  isLoading,
  questions,
  selectOption,
  isChecked,
  checkAnswers,
  playAgain,
}) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    let count = 0;

    if (isChecked) {
      questions.forEach((question) => {
        question.options.forEach((option) => {
          if (option.isSelected && question.correctOptionId === option.id) {
            count++;
          }
        });
      });
    }

    const questionComponents = questions.map((quizQn) => (
      <Question
        key={quizQn.id}
        question={quizQn}
        selectOption={selectOption}
        isChecked={isChecked}
      />
    ));
    return (
      <section className="quiz">
        <h1>Quiz screen</h1>

        {questionComponents}

        <section className="quiz-footer">
          {!isChecked ? (
            <button
              className="primary-btn"
              onClick={checkAnswers}
            >
              Check answers
            </button>
          ) : (
            <>
              <h3 className="score-text">
                You scored{' '}
                <strong className="score-num">
                  {count}/{questions.length}
                </strong>{' '}
                correct answers
              </h3>

              <button
                className="primary-btn"
                onClick={playAgain}
              >
                Play again
              </button>
            </>
          )}
        </section>
      </section>
    );
  }
}

export default Quiz;
