import './CTACards.css'
import { PhoneApplyCard } from '../Role/roleSVGComponents'
import { PhoneFaqCard } from '../Role/roleSVGComponents'


export default function CTACards() {
  return (
    <div className="cta-container">
        <div className="faqContainer">
        <PhoneFaqCard className='faqCard'></PhoneFaqCard>
        <h1>Drill down on the details?</h1>
        <li className='faqBtn'>Read faq</li>
        </div>

        <div className="applyContainer">
            <PhoneApplyCard className='applyCard'></PhoneApplyCard>
            <h1>Ready to up-grade?</h1>
            <li className='applyBtn'>Apply now</li>
        </div>
  </div>
  )
}
