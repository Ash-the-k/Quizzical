import Option from "./Option";

function Question({ question }) {
  const optionComponents = question.options.map((option) => (
    <Option
      key={option.id}
      option={option}
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
