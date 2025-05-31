import './FAQstyle.scss';
import * as Accordion from '@radix-ui/react-accordion';

export default function FAQPage() {
    const faqItems = [
      {
        question: 'Who is eligible to participate?',
        answer: 'All current UCSD students and recent graduates from all majors and experience levels are encouraged to apply! Mentors will provide support in areas where help may be needed, ensuring you have the guidance to succeed.'
      },
      {
        question: 'How many people will be accepted?',
        answer: 'UP-Grade 2025 will have 6 student teams with ____ participants in each team. Overall, there are ___ participants total.'
      },
      {
        question: 'Can I request teammates?',
        answer: 'Yes! We will take requests into consideration when assigning participants to teams, however, we cannot guarantee you will be placed with everyone you request.'
      },
      {
        question: 'How will participants be selected?',
        answer: 'Participants will be selected through a holistic review process that considers their application, past experiences, and interview. We will ensure that candidates are given a fair opportunity to showcase their unique strengths and potential!'
      },
      {
        question: 'Do I need prior design experience?',
        answer: 'No, prior design experience is not required! We welcome participants of all experience levels– whether you’re a seasoned design pro or just starting your creative career.'
      },
      {
        question: 'Will this program be remote or in-person?',
        answer: 'This program will be fully remote, allowing participants to join synchonously online.'
      }, 
      {
        question: 'When are applications due?',
        answer: 'Friday, June 6 at 11:59PM PT. Decisions will be sent out approximately a week after the application deadline.'
      }
  ];

  function renderFAQ(){
    return (
      <>
        <h1>Frequently Asked Questions</h1>
        <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {faqItems.map(item => (
          <Accordion.Item
            value={item.answer}
            key={item.answer}
          >
            <Accordion.Header className="AccordionHeader">
              <Accordion.Trigger className="AccordionQuestion">
                <p>{item.question}</p>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M14 8H8L8 14H6L6 8H0L0 6H6V0L8 0V6L14 6V8Z"
                    fill="currentColor"
                  />
                </svg>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="AccordionContent">
              <p>{item.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      </>
    );

  }

  return (
    renderFAQ()
  )
    
}




