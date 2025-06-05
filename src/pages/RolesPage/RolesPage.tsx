import './RolesPage.scss';
import {
  DesktopPegboard,
  PhonePegboard,
  TabletPegboard
} from '../../components/ui/Role/roleSVGComponents';
import Role from '../../components/ui/Role/Role';
import { ROLE_LIST } from '../../components/ui/Role/constRoleData';
import type { role } from '../../components/ui/PersonalityQuiz/constants';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import DashedArrow from '../../components/DashedArrow/DashedArrow';

export default function RolesPage() {
  return (
    <main id="roles-page">
      <div className="main-titles">
        <h1 className="role-title">Roles</h1>
        <h4 className="subtitle">Uncover different ways to grow through UP-Grade.</h4>
      </div>

      <div className="quiz-titles">
        <div className="quiz-titles-text-container">
          <h4 className="subtitle2">Not sure what role to try?</h4>
          <Button text="Take A Brief Quiz" link="/quiz" />
        </div>
        <DashedArrow />
      </div>

      <div className="pegboard-container">
        <PhonePegboard className="phonePegboard" />
        <TabletPegboard className="tabletPegboard" />
        <DesktopPegboard className="desktopPegboard" />
        {Object.entries(ROLE_LIST).map(([key, role]) => (
          <Role key={role.role} roleKey={key as role} title={role.role} SVG={role.SVG} />
        ))}
      </div>

      <CTASection />
    </main>
  );
}
