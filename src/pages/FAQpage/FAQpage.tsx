import './FAQstyle.scss';
import * as Accordion from '@radix-ui/react-accordion';
import SvgLeftPegboard from '../../components/ui/FAQ/svg-components/LeftPegboard';
import SvgRightPegboard from '../../components/ui/FAQ/svg-components/RightPegboard';
import CTASection from '../../components/CTASection/CTASection';

export default function FAQPage() {
  const faqItems = [
    {
      question: 'Who is eligible to participate?',
      answer:
        'All current UCSD students and recent graduates from all majors and experience levels are encouraged to apply! Mentors will provide support in areas where help may be needed, ensuring you have the guidance to succeed.'
    },
    {
      question: 'How many people will be accepted?',
      answer:
        'UP-Grade 2025 will have 6 student teams with 6 participants in each team. Overall, there are 36 participants total.'
    },
    {
      question: 'Can I request teammates?',
      answer:
        'Yes! We will take requests into consideration when assigning participants to teams, however, we cannot guarantee you will be placed with everyone you request.'
    },
    {
      question: 'How will participants be selected?',
      answer:
        'Participants will be selected through a holistic review process that considers their application, past experiences, and interview. We will ensure that candidates are given a fair opportunity to showcase their unique strengths and potential!'
    },
    {
      question: 'Do I need prior design experience?',
      answer:
        'No, prior design experience is not required! We welcome participants of all experience levels—whether you’re a seasoned design pro or just starting your creative career.'
    },
    {
      question: 'Will this program be remote or in-person?',
      answer:
        'This program will be fully remote, allowing participants to join synchonously online.'
    },
    {
      question: 'When are applications due?',
      answer:
        'Friday, June 13 at 11:59PM PT. Decisions will be sent out approximately a week after the application deadline.'
    }
  ];

  function renderFAQ() {
    return (
      <main id="faqpage">
        <h1>
          <span className="mobile">FAQ</span>
          <span className="tablet-desktop">Frequently Asked Questions</span>
        </h1>
        <div className="faq-pegboard-container">
          <SvgLeftPegboard className="left-pegboard" />
          <SvgRightPegboard className="right-pegboard" />
          <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            {faqItems.map(item => (
              <Accordion.Item value={item.answer} key={item.answer} className="AccordionItem">
                <Accordion.Trigger className="AccordionQuestion">
                  <p>{item.question}</p>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 13L16.1509 21L8 13"
                      stroke="#353C51"
                      strokeWidth="4"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent">
                  <p>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        <CTASection />
      </main>
    );
  }

  return renderFAQ();
}
