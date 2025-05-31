import { Brush, Clock, Glass, MeasuringTape, Tape, Telephone } from './roleSVGComponents';

export const ROLE_LIST = {
  PM: {
    role: 'Project Manager',
    SVG: <Clock />,
    color: '#10B9DF',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Prioritization', 'Communication', 'Innovation', 'Resource Allocation'],
    lead: ['Meetings', 'Tracking Metrics', 'Deliverables', 'Retrospectives'],
    impact: `Project Managers are the glue of leading timelines, syncing communication,
     and translating ideas into execution. PMs shape how products ship and scale,
      driving collaboration across design, engineering, and strategy.`
  },
  PMM: {
    role: 'Product Marketing Manager',
    SVG: <Telephone />,
    color: '#8BB660',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Brand Strategy', 'Storytelling', 'Market Awareness', 'Writing'],
    lead: ['Go-to-market Strategy', 'Brand Direction', 'Content & Tone'],
    impact: `Product Marketing sits at the intersection of design, business, 
    and audience understanding. In an era where product differentiation 
    relies on storytelling and positioning, they ensure that great design
     is seen and understood.`
  },
  SWE: {
    role: 'Software Engineer',
    SVG: <Tape />,
    color: '#49A0EB',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Logical Thinking', 'Code Fluency', 'Optimization', 'Feasibility'],
    lead: ['Managing Handoff', 'Debugging', 'Engineering the Product'],
    impact: `Software Engineers are the architects and builders of the 
    digital world. They transform creative visions and user needs into 
    fully functioning digital products that are scalable, efficient, 
    and responsive.`
  },
  UXR: {
    role: 'UX Researcher',
    SVG: <Glass />,
    color: '#F1A210',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Communication', 'Investigation', 'Forming Insights', 'User Advocacy'],
    lead: ['Interviews & Tests', 'Data Analysis', 'Validating Product Direction'],
    impact: `UX Researchers illuminate what people need, not just what designers 
    assume. Their insights anchor product decisions in real-world context,
     helping designers avoid bias, build with empathy, and prioritize users.`
  },
  Vis: {
    role: 'Visual Designer',
    SVG: <Brush />,
    color: '#F95984',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Hierarchy', 'Attention to detail', 'Creative Direction', 'Consistency'],
    lead: ['Visual Identity', 'Design Systems', 'VQA'],
    impact: `Visual Designers nurture the cultural relationship 
        between users and products. Their work influences perception,
        usability, and identity. It can be the difference-maker between
         a good and a delightful experience.`
  },
  UXD: {
    role: 'UX Designer',
    SVG: <MeasuringTape />,
    color: '#FF8B39',
    description: 'General description will go right here. General description will go right here.',
    skills: ['Iterative Thinking', 'User Empathy', 'Data-driven Design'],
    lead: ['User Flows', 'Product Interaction', 'Wireframing & Prototyping'],
    impact: `UX Designers translate user behaviors into meaningful digital
     experiences. By shaping how people interact with products, they influence 
     accessibility, usability, and engagement.`
  }
};
