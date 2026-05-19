import { clsx } from 'clsx';

function Option({
  option,
  questionId,
  selectOption,
  isChecked,
  correctOption,
}) {
  const className = clsx(
    'option-btn',
    !isChecked && option.isSelected && 'selected',
    isChecked && {
      correct : correctOption,
      wrong : !correctOption && option.isSelected,
      muted : !correctOption
    }
  );

  return (
    <button
      className={className}
      onClick={() => selectOption(questionId, option.id)}
    >
      {option.text}
    </button>
  );
}

export default Option;
