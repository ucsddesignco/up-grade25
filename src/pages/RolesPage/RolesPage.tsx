import './RolesPage.css';
import {
  DesktopPegboard,
  PhonePegboard,
  TabletPegboard
} from '../../components/ui/Role/roleSVGComponents';
import Role from '../../components/ui/Role/Role';
import { ROLE_LIST } from '../../components/ui/Role/constRoleData';
import CTACards from '../../components/ui/CTACards/CTACards';

export default function Roles() {
  return (
    <section className="roles-section">
      <div className="main-titles">
        <h1 className="role-title">Roles</h1>
        <h4 className="subtitle">Uncover different ways to grow through UP-Grade.</h4>
      </div>

      <div className="quiz-titles">
        <h4 className="subtitle2">Not sure what role to try?</h4>
        <li className="quiz-btn">Take A Brief Quiz</li>
      </div>

      <div className="pegboard-container">
        <PhonePegboard className="phonePegboard" />
        <TabletPegboard className="tabletPegboard" />
        <DesktopPegboard className="desktopPegboard" />
        {ROLE_LIST.map(role => (
          <Role title={role.role} SVG={role.SVG} />
        ))}
      </div>

      <CTACards />
    </section>
  );
}
