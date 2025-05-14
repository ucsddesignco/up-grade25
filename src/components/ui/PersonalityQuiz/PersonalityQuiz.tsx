import { useEffect, useState } from "react";
import "./PersonalityQuiz.css";
import { QuizQuestions } from "./constants";
import type { QuizOption } from "./constants";

export default function PersonalityQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = QuizQuestions[currentQuestionIndex];
    const [rolePoints, setRolePoints] = useState({
        PMM: 0,
        PM: 0,
        UXR: 0,
        UXD: 0,
        SWE: 0,
        Vis: 0,
    });
    const [selectedAnswer, setSelectedAnswer] = useState<QuizOption | null>(
        null
    );

    useEffect(() => {
        console.log(selectedAnswer);
    }, [selectedAnswer]);

    useEffect(() => {
        console.log(rolePoints);
    }, [rolePoints]);

    // continue button -> move to the next question
    const handleContinue = () => {
        setRolePoints((prevPoints) => {
            if (!selectedAnswer) return prevPoints;

            return {
                ...prevPoints,
                [selectedAnswer.role]:
                    prevPoints[selectedAnswer.role] + selectedAnswer.points,
            };
        });
        setSelectedAnswer(null);

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
            <h4 className="questionNum">
                Q{currentQuestionIndex + 1}/{QuizQuestions.length}
            </h4>
            <h1 className="question-title">{currentQuestion.question}</h1>

            <div className="quiz-options">
                <ul>
                    {currentQuestion.option.map((option) => (
                        <li
                            key={option.id}
                            className={
                                selectedAnswer &&
                                selectedAnswer.id === option.id
                                    ? "selected"
                                    : ""
                            }
                            onClick={() => setSelectedAnswer(option)}
                        >
                            <a href="#" className="quizOptions">
                                {option.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="quiz-buttons">
                <button
                    className="backBtn"
                    onClick={handleBack}
                    disabled={currentQuestionIndex === 0}
                >
                    Back
                </button>
                <button
                    className="continueBtn"
                    onClick={handleContinue}
                    disabled={
                        currentQuestionIndex === QuizQuestions.length - 1 ||
                        selectedAnswer === null
                    }
                >
                    Continue
                </button>
            </div>
        </section>
    );
}
