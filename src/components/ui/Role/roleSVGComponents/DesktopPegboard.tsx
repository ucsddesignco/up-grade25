import type { SVGProps } from 'react';
const SvgDesktopPegboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1171} height={741} fill="none" {...props}>
    <rect width={1167} height={737} x={2} y={2} fill="#EBEAE8" rx={10} />
    <rect width={1167} height={737} x={2} y={2} fill="url(#DesktopPegboard_svg__a)" rx={10} />
    <rect width={1167} height={737} x={2} y={2} stroke="#353C51" strokeWidth={4} rx={10} />
    <defs>
      <pattern
        id="DesktopPegboard_svg__a"
        width="4.127%"
        height="6.548%"
        patternContentUnits="objectBoundingBox"
        patternUnits="userSpaceOnUse"
        viewBox="49408 14225 48 48"
      >
        <rect width={8} height={12} x={49428} y={14243} fill="#353C51" rx={4} />
      </pattern>
    </defs>
  </svg>
);
export default SvgDesktopPegboard;
