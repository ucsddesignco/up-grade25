import './DashedArrow.scss';
import LeftArrowhead from '../../assets/left_arrowhead.svg?react';

export default function DashedArrow({ className }: { className?: string }) {
  return (
    <div className={`dashed-arrow ${className}`}>
      <LeftArrowhead />
      <div className="dotted-line"></div>
      {/* Right arrow */}
      <LeftArrowhead style={{ transform: 'rotate(180deg)' }} />
    </div>
  );
}
