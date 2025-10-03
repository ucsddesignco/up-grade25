import './CaseStudiesCard.scss';

interface CaseStudiesCardProps {
  projectName: string;
  teamName: string;
  imageSrc: string;
  teamMembers: string;
  documentationLink: string;
}

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({
  projectName,
  imageSrc,
  teamMembers,
  documentationLink
}) => {
  return (
    <div className="case-studies-card">
      <img src={imageSrc} alt={projectName} />
      <div>
        <h3>{projectName}</h3>
        <p>{teamMembers}</p>
      </div>
      <a href={documentationLink} target="_blank" rel="noopener noreferrer" className="">
        {' '}
        <p>Project Documentation</p>
      </a>
    </div>
  );
};

export default CaseStudiesCard;
