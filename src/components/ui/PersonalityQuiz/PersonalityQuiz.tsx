import { useState } from 'react';
import './PersonalityQuiz.scss';
import QuizVector from './QuizVector/QuizVector';
import { QuizQuestions } from './constants';
import type { QuizOption, role } from './constants';
import { useNavigate } from 'react-router';
import Button from '../../Button/Button';
import ArrowVector from './ArrowVector';

export default function PersonalityQuiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(QuizOption | null)[]>(
    Array(QuizQuestions.length).fill(null)
  );
  const selectOption = (option: QuizOption) => {
    setSelectedAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      if (newAnswers[currentQuestionIndex]?.id === option.id) {
        newAnswers[currentQuestionIndex] = null;
      } else {
        newAnswers[currentQuestionIndex] = option;
      }
      return newAnswers;
    });
  };

  const selectedOption = selectedAnswers[currentQuestionIndex];

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

  function getTopRole(answers: (QuizOption | null)[]): role | null {
    // Initialize all role scores to 0
    const roleScores: Record<role, number> = {
      PMM: 0,
      PM: 0,
      UXR: 0,
      UXD: 0,
      SWE: 0,
      VIS: 0
    };

    // Sum up scores from all answers
    answers.forEach(answer => {
      if (!answer) return;

      Object.entries(answer.pointDist).forEach(([roleKey, points]) => {
        roleScores[roleKey as role] += points;
      });
    });

    // Find the role with the highest score
    let topRole: role | null = null;
    let maxScore = -Infinity;

    for (const [roleKey, score] of Object.entries(roleScores) as [role, number][]) {
      if (score > maxScore) {
        maxScore = score;
        topRole = roleKey;
      }
    }

    return topRole;
  }

  function handleReveal() {
    const topRole = getTopRole(selectedAnswers);
    console.log('TOP ROLE: ', topRole);
    navigate(`/roles/${topRole}`);
  }

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
          <h3 className="question-title">{QuizQuestions[currentQuestionIndex].question}</h3>
        </div>
        <div className="quiz-options">
          <ul>
            {QuizQuestions[currentQuestionIndex].option.map(option => (
              <li
                key={option.id}
                className={selectedOption && selectedOption.id === option.id ? 'selected' : ''}
                onClick={() => selectOption(option)}
              >
                <p className="quizOptions">{option.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="quiz-buttons">
          <button className="backBtn" onClick={handleBack} disabled={currentQuestionIndex === 0}>
            Back
          </button>

          {currentQuestionIndex !== QuizQuestions.length - 1 ? (
            <button
              className="continueBtn"
              onClick={handleContinue}
              disabled={selectedOption === null}
            >
              Continue
            </button>
          ) : (
            <Button
              text="Reveal Text"
              className="continueBtn"
              onClick={handleReveal}
              disabled={selectedOption === null}
              icon={<ArrowVector />}
            />
          )}
        </div>
      </div>
    </section>
  );
}
