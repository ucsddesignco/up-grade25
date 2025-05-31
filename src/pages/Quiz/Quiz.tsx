import { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Quiz.css';
import PersonalityQuiz from '../../components/ui/PersonalityQuiz/PersonalityQuiz';

export default function Quiz() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        // quiz shown
        <PersonalityQuiz />
      ) : (
        // intro section shown before starting
        <section className="p-quiz">
          <h1 className="quiz-title">
            Ready to find out which skills you can UP-Grade this summer?
          </h1>
          <li className="start-btn" onClick={() => setStarted(true)}>
            Let's start! <FaArrowUpRightFromSquare />
          </li>
        </section>
      )}
    </>
  );
}
