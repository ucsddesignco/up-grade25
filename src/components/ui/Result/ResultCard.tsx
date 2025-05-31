import './ResultCard.css';
// import ROLE_LIST from './..//Role/constRoleData'
import { Brush } from '../Role/roleSVGComponents';

export default function ResultCard() {
  return (
    <>
      <div className="resultCard">
        <p>You could be a...</p>
        <h1>Visual Designer</h1>
        <Brush />
        <p>General description will go right here. General description will go right here. </p>
      </div>
    </>
  );
}
