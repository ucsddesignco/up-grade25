import './ResultCard.css';
import type { role } from '../PersonalityQuiz/constants';
import { ROLE_LIST } from '../Role/constRoleData';

interface ResultCardProps {
  role: role;
}

export default function ResultCard({ role }: ResultCardProps) {
  const ROLE = ROLE_LIST[role];

  return (
    <>
      <div className="resultCard">
        <p>You could be a...</p>
        <h1>{ROLE.role}</h1>
        {ROLE.SVG}
        <p>{ROLE.description}</p>
      </div>
    </>
  );
}
