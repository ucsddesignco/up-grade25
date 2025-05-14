import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import PersonalityQuiz from '../../components/ui/PersonalityQuiz/PersonalityQuiz';
import './Quiz.css';

export default function Quiz() {
  const [started, setStarted] = useState(false); //the quiz hasn't started yet

  return (
    <>
      {started ? (
        <PersonalityQuiz /> // if started is true show the <PersonalityQuiz /> component. otherwise show the intro <section>
      ) : (
        <section className="p-quiz">
          <h1 className="quiz-title">
            Ready to find out which skills you can UP-Grade this summer?
          </h1>
          <button className="start-btn" onClick={() => setStarted(true)}>
            Let's start! <FaArrowRight style={{ marginLeft: '0.5rem'}} />
          </button>
        </section>
      )}
    </>
  );
}
