import React from 'react';
import './PegboardFilled.css';
import PegboardEmpty from './PegboardEmpty';
import { Shelf, ShelfMobile, Ruler as BaseRuler, Sticky as BaseSticky } from './components';
import stickyText from './stickyText.json';
import { ROLE_COLORS } from './constants';

interface PegboardFilledProps {
  role: keyof typeof ROLE_COLORS;
  boardIndex: number;
}

interface StickyProps {
  color: string;
  body?: string;
  bodyFontSize?: string;
  className?: string;
}

interface RulerProps {
  color: string;
  className: string;
}

const Ruler = ({ color, className }: RulerProps) => (
  <BaseRuler color={color} className={className} />
);

const Sticky = ({ color, body, bodyFontSize, className }: StickyProps) => (
  <BaseSticky color={color} body={body} bodyFontSize={bodyFontSize} className={className} />
);

const PegboardFilled: React.FC<PegboardFilledProps> = ({ role, boardIndex }) => {
  if (boardIndex >= 6) {
    console.warn(`Invalid board index: ${boardIndex}`);
    return null;
  }

  // Get sticky text data
  const stickyTextData = stickyText.stickyText.find(item => item.id === boardIndex);

  // Get component variants for this board
  const PhotoComponent = ROLE_COLORS[role].photo;
  const rulerColor = ROLE_COLORS[role].text;
  const stickyColor = ROLE_COLORS[role].text;
  const UniqueComponent = ROLE_COLORS[role].unique;

  return (
    <div id="filled-pegboard-container">
      <PegboardEmpty color={ROLE_COLORS[role].pegboard} />

      <PhotoComponent className="pegboard-item photo-component" />

      <Ruler color={rulerColor} className="pegboard-item ruler-component" />

      <Sticky
        className="pegboard-item sticky-component"
        color={stickyColor}
        body={stickyTextData?.body}
        bodyFontSize={stickyTextData?.bodyFontSize}
      />

      <ShelfMobile className="shelf-mobile pegboard-item shelf-component" />
      <Shelf className="shelf-desktop pegboard-item shelf-component" />

      <UniqueComponent className="pegboard-item unique-component" />
    </div>
  );
};

export default PegboardFilled;
