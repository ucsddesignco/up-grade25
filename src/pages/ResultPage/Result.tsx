import './Result.css';
import ResultCard from '../../components/ui/Result/ResultCard';
import Skills from '../../components/ui/Result/Skills';
import CTACards from '../../components/ui/CTACards/CTACards';
import type { role } from '../../components/ui/PersonalityQuiz/constants';

interface ResultPageProps {
  role: role;
}

export default function Result({ role }: ResultPageProps) {
  return (
    <section className="result-section">
      <ResultCard role={role} />
      <Skills role={role} />
      <CTACards />
    </section>
  );
}
