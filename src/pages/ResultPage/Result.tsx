import './Result.css';
import ResultCard from '../../components/ui/Result/ResultCard';
import Skills from '../../components/ui/Result/Skills';
import CTACards from '../../components/ui/CTACards/CTACards';

export default function Result() {
  return (
    <section className="result-section">
      <ResultCard />
      <Skills />
      <CTACards/>
    </section>
  );
}
