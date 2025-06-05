import './ResultCard.scss';
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
        <h1 style={{ color: ROLE.color }}>{ROLE.role}</h1>
        {ROLE.SVG}
        <p>{ROLE.description}</p>
      </div>
    </>
  );
}
