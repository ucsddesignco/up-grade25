import { useState, useEffect } from "react";
import './Overview.css';

import OverviewMobile from "./OverviewMobile";
import OverviewTablet from "./OverviewTablet";
import OverviewDesktop from "./OverviewDesktop";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('desktop');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth < 768) setBreakpoint('mobile');
      else if (window.innerWidth < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  return breakpoint;
};

const Overview = () => {
  const breakpoint = useBreakpoint(); // ← Use the hook here!
  
  return (
    <>
      {breakpoint === 'mobile' && <OverviewMobile />}
      {breakpoint === 'tablet' && <OverviewTablet />}
      {breakpoint === 'desktop' && <OverviewDesktop />}
    </>
  );
};

export default Overview;