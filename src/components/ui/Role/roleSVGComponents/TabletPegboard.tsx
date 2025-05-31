import type { SVGProps } from 'react';
const SvgTabletPegboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={638} height={1118} fill="none" {...props}>
    <rect width={634} height={1114} x={2} y={2} fill="#EBEAE8" rx={10} />
    <rect width={634} height={1114} x={2} y={2} fill="url(#TabletPegboard_svg__a)" rx={10} />
    <rect width={634} height={1114} x={2} y={2} stroke="#353C51" strokeWidth={4} rx={10} />
    <defs>
      <pattern
        id="TabletPegboard_svg__a"
        width="7.619%"
        height="4.324%"
        patternContentUnits="objectBoundingBox"
        patternUnits="userSpaceOnUse"
        viewBox="50463 14513 48 48"
      >
        <rect width={8} height={12} x={50483} y={14531} fill="#353C51" rx={4} />
      </pattern>
    </defs>
  </svg>
);
export default SvgTabletPegboard;
