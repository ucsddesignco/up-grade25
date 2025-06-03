import { memo } from 'react';
import './PegboardFilled.scss';
import PegboardEmpty from './PegboardEmpty';
import { Shelf, ShelfMobile, Ruler as BaseRuler, Sticky as BaseSticky } from './components';
import { ROLE_COLORS, STICKY_TEXT } from './constants';

interface PegboardFilledProps {
  role: keyof typeof ROLE_COLORS;
  rotation: number;
}

const PegboardFilled = ({ role, rotation }: PegboardFilledProps) => {
  const stickyTextData = STICKY_TEXT.find(item => item.title === role);

  const {
    photo: PhotoComponent,
    text: textColor,
    unique: UniqueComponent,
    pegboard: pegboardColor
  } = ROLE_COLORS[role];

  return (
    <div id="filled-pegboard-container">
      <PegboardEmpty color={pegboardColor} />

      <PhotoComponent className="pegboard-item photo-component" />

      <BaseRuler color={textColor} className="pegboard-item ruler-component" rotation={rotation} />

      <BaseSticky
        className="pegboard-item sticky-component"
        color={textColor}
        body={stickyTextData?.body}
        bodyFontSize={stickyTextData?.bodyFontSize}
      />

      <ShelfMobile className="shelf-mobile pegboard-item shelf-component" />
      <Shelf className="shelf-desktop pegboard-item shelf-component" />

      <UniqueComponent className="pegboard-item unique-component" />
    </div>
  );
};

export default memo(PegboardFilled);
