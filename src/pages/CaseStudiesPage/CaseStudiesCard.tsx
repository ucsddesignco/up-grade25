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
      <a href={documentationLink} target="_blank"><img src={imageSrc} alt={projectName}/></a>
      <div>
        <h3>{projectName}</h3>
        <p>{teamMembers}</p>
      </div>
      <a className="documentationLink" href={documentationLink} target="_blank" rel="noopener noreferrer">
        {' '}
        <p>Project Documentation</p>
      </a>
    </div>
  );
};

export default CaseStudiesCard;
