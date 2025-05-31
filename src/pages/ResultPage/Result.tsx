import './Result.css';
import ResultCard from '../../components/ui/Result/ResultCard';
import Skills from '../../components/ui/Result/Skills';
import CTACards from '../../components/ui/CTACards/CTACards';
import { Navigate, useParams } from 'react-router';
import type { role } from '../../components/ui/PersonalityQuiz/constants';

export default function Result() {
  const roles = ['PMM', 'PM', 'UXR', 'UXD', 'SWE', 'VIS'];

  let { roleId } = useParams();
  roleId = roleId?.toUpperCase();

  if (!roleId || !roles.includes(roleId as role)) {
    return <Navigate to="/roles" replace />;
  }

  return (
    <section className="result-section">
      <ResultCard role={roleId as role} />
      <Skills role={roleId as role} />
      <CTACards />
    </section>
  );
}
