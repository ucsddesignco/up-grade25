import './FAQstyle.scss';
import * as React from 'react';;
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

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

