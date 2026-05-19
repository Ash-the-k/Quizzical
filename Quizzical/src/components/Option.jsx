function Option({ option, questionId, selectOption }) {
  return (
    <button
      className={option.isSelected ? "option-btn selected" : "option-btn"}
      onClick={() => selectOption(questionId, option.id)}
    >
      {option.text}
    </button>
  );
}

export default Option;
