import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';

import getQuizQuestions from './api/getQuizQuestions';

import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('landing');
  const [questions, setQuestions] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function checkAnswers() {
    setIsChecked(true);
  }

  function selectOption(questionId, optionId) {
    if (isChecked) return;
    setQuestions((prevQns) => {
      return prevQns.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            options: question.options.map((option) => ({
              ...option,
              isSelected: option.id === optionId,
            })),
          };
        } else {
          return question;
        }
      });
    });
  }

  function startQuiz() {
    setScreen('quiz');
    setIsLoading(true);
    setIsChecked(false);
    const quizQuestions = getQuizQuestions();
    setQuestions(quizQuestions);
    setIsLoading(false);
  }

  return (
    <main className="app">
      {screen === 'landing' ? (
        <Landing startQuiz={startQuiz} />
      ) : (
        <Quiz
          isLoading={isLoading}
          questions={questions}
          selectOption={selectOption}
          isChecked={isChecked}
          checkAnswers={checkAnswers}
          playAgain={startQuiz}
        />
      )}
    </main>
  );
}

export default App;
