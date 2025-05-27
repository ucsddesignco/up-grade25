import PersonalityQuiz from '../../components/ui/PersonalityQuiz/PersonalityQuiz';
import './Quiz.css';

export default function Quiz() {
  // const [started, setStarted] = useState(false); //the quiz hasn't started yet

  return (
    <>
  
        <PersonalityQuiz /> 

        {/* <section className="p-quiz">
          <h1 className="quiz-title">
            Ready to find out which skills you can UP-Grade this summer?
          </h1>
          <li className="start-btn" onClick={() => setStarted(true)}>
            Let's start! <FaArrowRight/>
          </li>
        </section> */}
 
    </>
  );
}
