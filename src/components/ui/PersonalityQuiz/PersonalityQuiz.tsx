import { useEffect, useState } from 'react';
import './PersonalityQuiz.scss';
import QuizVector from './QuizVector/QuizVector';
import { QuizQuestions } from './constants';
import type { QuizOption } from './constants';

export default function PersonalityQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = QuizQuestions[currentQuestionIndex];
  const [rolePoints, setRolePoints] = useState({
    PMM: 0,
    PM: 0,
    UXR: 0,
    UXD: 0,
    SWE: 0,
    Vis: 0
  });

  const [answers, setAnswers] = useState(() => {
    // Load saved answers from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('quizAnswers');
      return saved ? JSON.parse(saved) : Array(QuizQuestions.length).fill(null);
    }
    return Array(QuizQuestions.length).fill(null);
  });

  // Save answers to localStorage when they change
  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    console.log(rolePoints);
  }, [rolePoints]);

  const selectOption = (option: QuizOption) => {
    // Toggle selection - if clicking the same option, unselect it
    const newValue = selectedOption?.id === option.id ? null : option;
    setSelectedOption(newValue);

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = newValue;
    setAnswers(newAnswers);
  };

  // continue button -> move to the next question
  const handleContinue = () => {
    setRolePoints(prevPoints => {
      if (!selectedOption) return prevPoints;

      return {
        ...prevPoints,
        [selectedOption.role]: prevPoints[selectedOption.role] + selectedOption.points
      };
    });

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
    <section id="quiz-section">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quizQuestContainer">
            <QuizVector />
            <h4 className="questionNum">
              Q{currentQuestionIndex + 1}/{QuizQuestions.length}
            </h4>
            <QuizVector />
          </div>
          <h3 className="question-title">{currentQuestion.question}</h3>
        </div>
        <div className="quiz-options">
          <ul>
            {currentQuestion.option.map(option => (
              <li
                key={option.id}
                className={selectedOption && selectedOption.id === option.id ? 'selected' : ''}
                onClick={() => selectOption(option)}
              >
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
          <button
            className="continueBtn"
            onClick={handleContinue}
            disabled={selectedOption === null}
          >
            {currentQuestionIndex === QuizQuestions.length - 1 && selectedOption
              ? 'Reveal Result'
              : 'Continue'}
          </button>
        </div>
      </div>
    </section>
  );
}
