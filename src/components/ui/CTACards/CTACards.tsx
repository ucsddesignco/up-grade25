import './CTACards.css';
import { PhoneApplyCard, PhoneFaqCard, MediumFaqCard, MediumApplyCard } from '../Role/roleSVGComponents';

export default function CTACards() {
  return (
    <div className="cta-container">
      <div className="faqContainer">
        <PhoneFaqCard className="faqCard"></PhoneFaqCard>
        <MediumFaqCard className="faqCardMedium"/>
        <h1>Drill down on the details?</h1>
        <li className="faqBtn">Read faq</li>
      </div>

      <div className="applyContainer">
        <PhoneApplyCard className="applyCard"></PhoneApplyCard>
        <MediumApplyCard className="applyCardMedium"/>
        <h1>Ready to up-grade?</h1>
        <li className="applyBtn">Apply now</li>
      </div>
    </div>
  );
}
