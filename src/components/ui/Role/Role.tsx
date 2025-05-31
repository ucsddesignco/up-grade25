import type { ReactNode } from 'react';
import './Role.css';
import { useNavigate } from 'react-router';
import type { role } from '../PersonalityQuiz/constants';

interface RoleProps {
  roleKey: role;
  title: string;
  SVG: ReactNode;
}

export default function Role({ roleKey, title, SVG }: RoleProps) {
  const navigate = useNavigate();
  return (
    <div className="roleComp" onClick={() => navigate(`/roles/${roleKey}`)}>
      <h2 className="roleTitle">{title}</h2>
      {SVG}
    </div>
  );
}
