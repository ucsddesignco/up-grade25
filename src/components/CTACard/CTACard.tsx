import Button from '../Button/Button';
import './CTACard.scss';
import MobileFAQContainer from './SVGs/MobileFAQContainer.svg?react';
import MobileApplyContainer from './SVGs/MobileApplyContainer.svg?react';
import DesktopFAQContainer from './SVGs/DesktopFAQContainer.svg?react';
import DesktopApplyContainer from './SVGs/DesktopApplyContainer.svg?react';

const VARIATIONS = {
  faq: {
    header: 'Missing a Piece?',
    button: 'READ FAQ',
    background: '#353C51',
    textColor: 'white',
    link: '/faq'
  },
  apply: {
    header: 'Ready to Up-Grade?',
    button: 'APPLY NOW',
    background: 'white',
    textColor: '#353C51',
    link: 'https://forms.gle/1zNawC4iTSCEHEhd7'
  }
};

interface CTACardProps {
  variation: keyof typeof VARIATIONS;
  isDesktop?: boolean;
}

export default function CTACard({ variation = 'faq', isDesktop = false }: CTACardProps) {
  return (
    // prettier-ignore
    <div
      className="cta-card-container"
      style={
        {
          '--background-color': VARIATIONS[variation].background,
          '--text-color': VARIATIONS[variation].textColor
        } as React.CSSProperties
      }
    >
      {variation === 'faq' && isDesktop && <DesktopFAQContainer />}
      {variation === 'faq' && !isDesktop && <MobileFAQContainer />}
      {variation === 'apply' && isDesktop && <DesktopApplyContainer />}
      {variation === 'apply' && !isDesktop && <MobileApplyContainer />}

      <div className="text-container">
        <p>{VARIATIONS[variation].header}</p>
      </div>
      <Button
        link={VARIATIONS[variation].link}
        text={VARIATIONS[variation].button}
        className="cta-card-button"
      />
    </div>
  );
}
