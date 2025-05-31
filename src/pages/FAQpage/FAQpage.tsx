import './FAQstyle.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';;


export default function FAQPage() {
    const faqItems = [
      {
        question: 'Who is eligible to participate?',
        answer: 'Answer goes here'
      },
      {
        question: 'How many people will be accepted?',
        answer: 'Answer goes here'
      },
      {
        question: 'Can I request teammates?',
        answer: 'Answer goes here'
      },
      {
        question: 'How will participants be selected?',
        answer: 'Answer goes here'
      },
      {
        question: 'Do I need prior design experience?',
        answer: 'Answer goes here'
      },
      {
        question: 'Will this program be remote or in-person?',
        answer: 'Answer goes here'
      }, 
      {
        question: 'When are applications due?',
        answer: 'Answer goes here'
      }
  ];

  function renderFAQ(){
    return (
      <>
        <h1>Frequently Asked Questions</h1>
        {faqItems.map((item, index) => (
          <Accordion className='overall-accordion'
            key={index} 
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`content-${index}`}
              id={`content-header-${index}`}
            >
              <Typography id='question'>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography id='answer'>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    );

  }

  return (
    renderFAQ()
  )
    
}




