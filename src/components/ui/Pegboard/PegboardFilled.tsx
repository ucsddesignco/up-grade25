import React from 'react';
import Pegboard from './Pegboard';
import {
  PhotoBlue, PhotoGreen, PhotoOrange, PhotoPink, PhotoTeal, PhotoYellow,
  RulerBlue, RulerGreen, RulerOrange, RulerPink,RulerTeal,RulerYellow,
  UniqueBlue, UniqueGreen, UniqueOrange, UniquePink, UniqueTeal, UniqueYellow,
  StickyBlue, StickyGreen, StickyOrange, StickyPink, StickyTeal, StickyYellow,
  Shelf,  
} from './components';


interface ComponentPosition {
  component: string;
  x: string;
  y: string;
}

interface PegboardFilledProps {
  color?: string;
  boardIndex: number;
}

// Define component variants for each board
const componentVariants = {
    Photo: ['PhotoYellow', 'PhotoBlue', 'PhotoOrange', 'PhotoPink', 'PhotoTeal', 'PhotoGreen'],
    Ruler: ['RulerYellow','RulerBlue', 'RulerOrange', 'RulerPink', 'RulerTeal', 'RulerGreen'],
    Sticky: ['StickyYellow','StickyBlue', 'StickyOrange', 'StickyPink', 'StickyTeal', 'StickyGreen'],
    Shelf: ['Shelf', 'Shelf', 'Shelf', 'Shelf', 'Shelf', 'Shelf'],
    Unique: ['UniqueYellow','UniqueBlue', 'UniqueOrange', 'UniquePink', 'UniqueTeal', 'UniqueGreen']
};

// Component registry - map component names to actual components
const componentRegistry = {
  PhotoYellow: PhotoYellow,
  PhotoBlue: PhotoBlue,
  PhotoOrange: PhotoOrange,
  PhotoPink: PhotoPink,
  PhotoTeal: PhotoTeal,
  PhotoGreen: PhotoGreen,

  RulerYellow: RulerYellow,
  RulerBlue: RulerBlue,
  RulerOrange: RulerOrange,
  RulerPink: RulerPink,
  RulerTeal: RulerTeal,
  RulerGreen: RulerGreen,

  StickyYellow: StickyYellow,
  StickyBlue: StickyBlue,
  StickyOrange: StickyOrange,
  StickyPink: StickyPink,
  StickyTeal: StickyTeal,
  StickyGreen: StickyGreen,

  Shelf: Shelf,

  UniqueYellow: UniqueYellow,
  UniqueBlue: UniqueBlue,
  UniqueOrange: UniqueOrange,
  UniquePink: UniquePink,
  UniqueTeal: UniqueTeal,
  UniqueGreen: UniqueGreen,

};

// Layout positions for each breakpoint
const layouts = {
  mobile: [
    {
        component: 'Photo',
        x: '-27px',
        y:'685px'
    },
    {
        component: 'Ruler',
        x: '466px',
        y: '443px',
    },
    {
        component: 'Sticky',
        x: '96.6px',
        y: '54px'
    },
    {
      component: 'Shelf',
      x: '-7px',
      y: '546px', 
    },
    {
      component: 'Unique',
      x: '24px', 
      y: '349px',
    }
  ],
  tablet: [
    {
        component: 'Photo',
        x: '63px',
        y:'494px'
    },
    {
        component: 'Ruler',
        x: '466px',
        y: '443px',
    },
    {
        component: 'Sticky',
        x: '380px',
        y: '53.2px'
    },
    {
      component: 'Shelf',
      x: '41px',
      y: '306px', 
    },
    {
      component: 'Unique',
      x: '72px', 
      y: '109px',
    }
  ],
  desktop: [
    {
        component: 'Photo',
        x: '63px',
        y:'254px'
    },
    {
        component: 'Ruler',
        x: '468px',
        y: '64px',
    },
    {
        component: 'Sticky',
        x: '765px',
        y: '53.2px'
    },
    {
      component: 'Shelf',
      x: '617px',
      y: '546px', 
    },
    {
      component: 'Unique',
      x: '864px', 
      y: '349px',
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
    const ComponentToRender = componentRegistry[variantName as keyof typeof componentRegistry];
    
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
          zIndex: 2, // Above the pegboard
        }}
      >
        <ComponentToRender
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Pegboard color={color} />
      {currentLayout.map((position, index) => (
        <React.Fragment key={index}>
          {renderComponent(position)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PegboardFilled;