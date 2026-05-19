import Question from './Question';

function Quiz({ questions, selectOption, isChecked, checkAnswers }) {
  // console.log(questions[0].id)
//   console.log(isChecked);
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
      <button
        className="primary-btn"
        onClick={() => {
          checkAnswers();
        }}
      >
        Check answers
      </button>
    </section>
  );
}

export default Quiz;
