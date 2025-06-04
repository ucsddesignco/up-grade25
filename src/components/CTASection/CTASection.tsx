import CTACard from '../CTACard/CTACard';
import './CTASection.scss';

export default function CTASection() {
  return (
    <section id="cta-section">
      <div className="mobile-cards">
        <CTACard variation="faq" />
        <CTACard variation="apply" />
      </div>
      <div className="tablet-cards">
        <CTACard variation="faq" isDesktop={true} />
        <CTACard variation="apply" isDesktop={true} />
      </div>
    </section>
  );
}
