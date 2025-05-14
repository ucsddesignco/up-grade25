import { useState } from 'react';
import './PersonalityQuiz.css';
import { QuizQuestions } from './constants';

export default function PersonalityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = QuizQuestions[currentQuestionIndex];

  // continue button -> move to the next question
  const handleContinue = () => {
    if (currentQuestionIndex < QuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next question
    }
  };

  // back button -> move to the previous question
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1); //back to previous question
    }
  };

  return (
    <section className="quiz-section">
      <h4 className='questionNum'>Q{currentQuestionIndex + 1}/{QuizQuestions.length}</h4>
        <h1 className="question-title">{currentQuestion.question}</h1>

      <div className="quiz-options">
        <ul>
          {currentQuestion.option.map((option) => (
            <li key={option.id}>
              <a href="#" className="quizOptions">
                {option.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="quiz-buttons">
        <button className="backBtn" onClick={handleBack} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <button className="continueBtn" onClick={handleContinue} disabled={currentQuestionIndex === QuizQuestions.length - 1}>
          Continue
        </button>
      </div>
    </section>
  );
}
