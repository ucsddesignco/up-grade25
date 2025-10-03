import './CaseStudies.scss';
import CaseStudiesCard from './CaseStudiesCard';
import {caseStudies} from './CaseStudiesData';

const CaseStudies: React.FC = () => {
  return (
    <div className="case-studies-container">
      <h2>Case Studies: 2025 Projects</h2>
      <div className="case-studies">
        {caseStudies.map((study, index) => (
          <CaseStudiesCard
            key={index}
            projectName={study.projectName}
            teamName={study.teamName}
            imageSrc={study.imgSrc}
            teamMembers={study.teamMembers}
            documentationLink={study.documentationLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
