import CTACard from '../CTACard/CTACard';
import './CTASection.scss';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className }: CTASectionProps) {
  return (
    <section id="cta-section" className={className}>
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
