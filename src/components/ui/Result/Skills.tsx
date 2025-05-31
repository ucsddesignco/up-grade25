import './Skills.css';
import { ROLE_LIST } from '../Role/constRoleData';
import type { role } from '../PersonalityQuiz/constants';

interface SkillsProps {
  role: role;
}

export default function Skills({ role }: SkillsProps) {
  const ROLE = ROLE_LIST[role];

  return (
    <div className="skillSection">
      <div className="skillBoxes">
        <div className="skillsContainer">
          <h4>Skills you'd develop: </h4>
          <ul>
            {ROLE.skills.map(skill => (
              <li key={role + skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="leadContainer">
          <h4>What you'd lead: </h4>
          <ul>
            {ROLE.lead.map(lead => (
              <li key={role + lead}>{lead}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="industrySection">
        <div className="industryContainer">
          <h4>Industry Impact:</h4>
          <p>{ROLE.impact}</p>
        </div>

        <div className="otherRolesContainer">
          <h4>Not the right one for you?</h4>
          <li>
            <a>View Other Roles</a>
          </li>
        </div>
      </div>
    </div>
  );
}
