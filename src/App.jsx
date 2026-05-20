import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

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

  async function startQuiz() {
    setScreen('quiz');
    setIsLoading(true);
    setIsChecked(false);

    try {
      const quizQuestions = await getQuizQuestions();
      setQuestions(quizQuestions);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
      <Footer />
    </main>
  );
}

export default App;
