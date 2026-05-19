import decodeHtml from '../utils/decodeHtml';
import shuffleArray from '../utils/shuffleArray';

async function getQuizQuestions() {
  const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
  const data = await res.json();

  const questions = data.results.map((question, questionIndex) => {

    const correctOption = decodeHtml(question.correct_answer);

    const allOptions = [
      correctOption,
      ...question.incorrect_answers.map((answer) => decodeHtml(answer)),
    ];

    const shuffledOptions = shuffleArray(allOptions);

    const options = shuffledOptions.map((option, optionIndex) => ({
      id: `q${questionIndex + 1}-o${optionIndex + 1}`,
      text: option,
      isSelected: false,
    }));

    const correctOptionId = options.find((option) => option.text === correctOption).id

    return {
      id: `q${questionIndex + 1}`,
      question: decodeHtml(question.question),
      correctOptionId: correctOptionId,
      options: options
    };
  });

  return questions;
}

export default getQuizQuestions;
