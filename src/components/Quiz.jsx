import Question from './Question';
import { DotLoader } from 'react-spinners';

function Quiz({
  isLoading,
  questions,
  selectOption,
  isChecked,
  checkAnswers,
  playAgain,
}) {
  if (isLoading) {
    return (
      <section className="quiz loading-state">
        <DotLoader
          color="#4D5B9E"
          size={80}
        />
        <h1 className="loading-text">Loading quiz...</h1>
        <h1 className="loading-subtext">Getting your questions ready</h1>
      </section>
    );
  }
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
      <h1 className="quiz-title">Your Quiz</h1>

      {questionComponents}

      <section className="quiz-footer">
        {!isChecked ? (
          <button
            className="primary-btn"
            onClick={checkAnswers}
          >
            Check Answers
          </button>
        ) : (
          <>
            <h3 className="score-text">
              Your Score: {' '}
              <strong className="score-num">
                {count}/{questions.length}
              </strong>
            </h3>

            <button
              className="primary-btn"
              onClick={playAgain}
            >
              Play Again
            </button>
          </>
        )}
      </section>
    </section>
  );
}

export default Quiz;
