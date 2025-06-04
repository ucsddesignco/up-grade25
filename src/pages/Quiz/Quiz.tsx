import { useState } from 'react';
import ArrowVector from './../../components/ui/PersonalityQuiz/ArrowVector';
import './Quiz.scss';
import PersonalityQuiz from '../../components/ui/PersonalityQuiz/PersonalityQuiz';
import Family from '../../components/ui/Role/roleSVGComponents/Family';
import Button from '../../components/Button/Button';

export default function Quiz() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        // quiz shown
        <PersonalityQuiz />
      ) : (
        // intro section shown before starting
        <section id="personality-quiz-intro">
          <h1 className="quiz-title">
            Ready to find out which skills you can UP-Grade this summer?
          </h1>
          <Button
            icon={<ArrowVector />}
            text="Let's Start!"
            className="start-btn"
            onClick={() => setStarted(true)}
          />
          {/* <li className="start-btn" onClick={() => setStarted(true)}>
            Let's start! <span className="icon"><ArrowVector /></span>
            </li> */}
          <div className="familySvg">
            <Family />
          </div>
        </section>
      )}
    </>
  );
}
