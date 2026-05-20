function Landing({ startQuiz }) {
  return (
    <section className="landing">
      <h1 className="landing-title">Quizzical</h1>
      <p className="landing-description">
        Test your knowledge with a quick quiz.
      </p>
      <button className="primary-btn" onClick={startQuiz}>Start Quiz</button>
    </section>
  );
}

export default Landing;
