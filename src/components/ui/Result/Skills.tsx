import './Skills.css';
export default function Skills() {
  return (
    <div className="skillSection">
      <div className="skillBoxes">
        <div className="skillsContainer">
          <h4>Skills you'd develop: </h4>
          <ul>
            <li>Hiearchy</li>
            <li>Attention to detail</li>
            <li>Creative Direction</li>
            <li>Consistency</li>
          </ul>
        </div>

        <div className="leadContainer">
          <h4>What you'd lead: </h4>
          <ul>
            <li>Visual Identity</li>
            <li>Design Systems</li>
            <li>Visual Quality Assurance (VQA)</li>
          </ul>
        </div>
      </div>

      <div className="industrySection">
        <div className="industryContainer">
          <h4>Industry Impact:</h4>
          <p>
            Visual Designers nurture the cultural relationship between users and products. Their
            work influences perception, usability, and identity. It can be the difference-maker
            between a good and a delightful experience.
          </p>
        </div>

        <div className="otherRolesContainer">
          <h4>Not the right one for you?</h4>
          <li>
            <a>View Other Roles</a>
          </li>
        </div>
      </div>
    </div>
  );
}
