/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import PegboardEmpty from './PegboardEmpty';
import {
  PhotoBlue,
  PhotoGreen,
  PhotoOrange,
  PhotoPink,
  PhotoTeal,
  PhotoYellow,
  UniqueBlue,
  UniqueGreen,
  UniqueOrange,
  UniquePink,
  UniqueTeal,
  UniqueYellow,
  Shelf,
  ShelfMobile,
  Ruler as BaseRuler,
  Sticky as BaseSticky
} from './components';
import stickyText from './stickyText.json';

interface ComponentPosition {
  component: string;
  x: string;
  y: string;
}

interface PegboardFilledProps {
  color?: string;
  boardIndex: number;
}

const roleColors = ['#F1A210', '#49A0EB', '#FF8B39', '#F95984', '#10B9DF', '#8BB660'];

// Define component variants for each board
const componentVariants = {
  Photo: [PhotoYellow, PhotoBlue, PhotoOrange, PhotoPink, PhotoTeal, PhotoGreen],
  Ruler: roleColors,
  Sticky: roleColors,
  Shelf: [Shelf, Shelf, Shelf, Shelf, Shelf, Shelf],
  Unique: [UniqueYellow, UniqueBlue, UniqueOrange, UniquePink, UniqueTeal, UniqueGreen]
};

// Layout positions for each breakpoint
const layouts = {
  mobile: [
    {
      component: 'Photo',
      x: '-27px',
      y: '685px'
    },
    {
      component: 'Sticky',
      x: '96.6px',
      y: '54px'
    },
    {
      component: 'Shelf',
      x: '-7px',
      y: '546px'
    },
    {
      component: 'Unique',
      x: '24px',
      y: '349px'
    }
  ],
  tablet: [
    {
      component: 'Photo',
      x: '63px',
      y: '494px'
    },
    {
      component: 'Ruler',
      x: '466px',
      y: '443px'
    },
    {
      component: 'Sticky',
      x: '380px',
      y: '53.2px'
    },
    {
      component: 'Shelf',
      x: '41px',
      y: '306px'
    },
    {
      component: 'Unique',
      x: '72px',
      y: '109px'
    }
  ],
  desktop: [
    {
      component: 'Photo',
      x: '63px',
      y: '254px'
    },
    {
      component: 'Ruler',
      x: '468px',
      y: '64px'
    },
    {
      component: 'Sticky',
      x: '765px',
      y: '53.2px'
    },
    {
      component: 'Shelf',
      x: '617px',
      y: '546px'
    },
    {
      component: 'Unique',
      x: '864px',
      y: '349px'
    }
  ]
};

// Hook to get current breakpoint
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  React.useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth >= 1440) {
        setBreakpoint('desktop');
      } else if (window.innerWidth >= 769) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

const Ruler = ({ color }: { color: string }) => <BaseRuler color={color} />;
const Sticky = ({
  color,
  title,
  body,
  titleFontSize,
  bodyFontSize
}: {
  color: string;
  title?: string;
  body?: string;
  titleFontSize?: string;
  bodyFontSize?: string;
  textAlign?: string;
}) => (
  <BaseSticky
    color={color}
    title={title}
    body={body}
    titleFontSize={titleFontSize}
    bodyFontSize={bodyFontSize}
  />
);

const PegboardFilled: React.FC<PegboardFilledProps> = ({ color, boardIndex }) => {
  const breakpoint = useBreakpoint();
  const currentLayout = layouts[breakpoint];

  const renderComponent = (position: ComponentPosition) => {
    const baseComponentName = position.component;
    const variants = componentVariants[baseComponentName as keyof typeof componentVariants];

    if (!variants || boardIndex >= variants.length) {
      console.warn(`No variant found for ${baseComponentName} at board index ${boardIndex}`);
      return null;
    }

    const variantName = variants[boardIndex];

    let ComponentToRender: React.ComponentType<any>;
    let componentProps = {};
    if (baseComponentName === 'Ruler' || baseComponentName === 'Sticky') {
      ComponentToRender = baseComponentName === 'Ruler' ? Ruler : Sticky;
      componentProps = { color: variantName };

      // Add text props for Sticky component
      if (baseComponentName === 'Sticky') {
        const stickyTextData = stickyText.stickyText.find(item => item.id === boardIndex);
        if (stickyTextData) {
          componentProps = {
            ...componentProps,
            title: stickyTextData.title,
            body: stickyTextData.body,
            titleFontSize: stickyTextData.titleFontSize,
            bodyFontSize: stickyTextData.bodyFontSize
          };
        }
      }
    } else {
      // Handle Shelf variant swap based on breakpoint
      if (baseComponentName === 'Shelf') {
        ComponentToRender = breakpoint === 'mobile' ? ShelfMobile : Shelf;
      } else {
        ComponentToRender = variantName as React.ComponentType<any>;
      }
    }

    if (!ComponentToRender) {
      console.warn(`Component ${variantName} not found in registry`);
      return null;
    }

    return (
      <div
        key={`${baseComponentName}-${boardIndex}-${breakpoint}`}
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          zIndex: 2 // Above the pegboard
        }}
      >
        <ComponentToRender
          {...componentProps}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <PegboardEmpty color={color} />
      {currentLayout.map((position, index) => (
        <React.Fragment key={index}>{renderComponent(position)}</React.Fragment>
      ))}
    </div>
  );
};

export default PegboardFilled;
