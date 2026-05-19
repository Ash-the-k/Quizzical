import Question from './Question';

function Quiz({ questions, selectOption }) {
  // console.log(questions[0].id)
  console.log(questions)
  const questionComponents = questions.map((quizQn) => (
    <Question
      key={quizQn.id}
      question={quizQn}
      selectOption={selectOption}
    />
  ));
  return (
    <section className="quiz">
      <h1>Quiz screen</h1>
      {questionComponents}
      <button className="primary-btn">Check answers</button>
    </section>
  );
}

export default Quiz;
