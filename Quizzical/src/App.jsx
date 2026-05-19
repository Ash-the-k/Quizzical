import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';

import getQuizQuestions from './api/getQuizQuestions';

import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('landing');
  const [questions, setQuestions] = useState([])

  function startQuiz() {
    const quizQuestions = getQuizQuestions();
    setQuestions(quizQuestions);
    setScreen('quiz');
  }

  return (
    <main className="app">
        {screen === 'landing'
        ? <Landing startQuiz={startQuiz} />
        : <Quiz questions={questions}/>
        }
    </main>
  );
}

export default App;
