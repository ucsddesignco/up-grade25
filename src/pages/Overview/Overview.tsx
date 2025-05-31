import './Overview.css';

import OverviewMobile from './OverviewMobile';
import OverviewTablet from './OverviewTablet';
import OverviewDesktop from './OverviewDesktop';

const Overview = () => {
  return (
    <>
      <OverviewMobile />
      <OverviewTablet />
      <OverviewDesktop />
    </>
  );
};

export default Overview;
