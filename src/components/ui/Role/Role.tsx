import type { ReactNode } from "react";
import "./Role.css";

interface RoleProps {
    title: string;
    SVG: ReactNode;
    }
    
export default function Role({title, SVG}: RoleProps) {
  return (
    <div className="roleComp">
      <h2 className="roleTitle">{title}
      </h2>
      {SVG}
    </div>
  );
}
