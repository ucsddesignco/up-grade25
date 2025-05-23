import './Roles.css'
import pegboard from './../../assets/Pegboard.svg'
import Role from '../../components/ui/PersonalityQuiz/Role/Role'
import {ROLE_LIST} from './../../components/ui/PersonalityQuiz/Role/constRoleData'



export default function Roles() {
  return (
    <section className='roles-section'>
      <div className="main-titles">
          <h1 className='role-title'>Explore all roles</h1>
          <h4>Uncover different ways to grow this summer.</h4>
        </div>
        {/* <li className='quiz-btn'>Take a brief quiz</li> */}
        <h4>Answer 4 questions to see what role is right for you!</h4>
        <div className="pegboard-container">
          <img className='boardSVG' src={pegboard} alt="" />

          {ROLE_LIST.map((role) => (
          <Role title={role.role} SVG={role.SVG}/>
          ))
          }

        </div>
    </section>
  )
}
