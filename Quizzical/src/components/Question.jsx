import Option from "./Option";

function Question({ question, selectOption, isChecked }) {
    // console.log(question)
  const optionComponents = question.options.map((option) => (
    <Option
      key={option.id}
      option={option}
      questionId={question.id}
      selectOption={selectOption}
      isChecked={isChecked}
      correctOption={question.correctOptionId === option.id}
    />
  ));
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options-container">{optionComponents}</div>
    </div>
  );
}

export default Question;
