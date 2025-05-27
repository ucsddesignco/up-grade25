import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhonePegboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={302} height={2031} fill="none" {...props}>
    <rect width={298} height={2027} x={2} y={2} fill="#EBEAE8" rx={10} />
    <rect width={298} height={2027} x={2} y={2} fill="url(#phone-pegboard_svg__a)" rx={10} />
    <rect width={298} height={2027} x={2} y={2} stroke="#353C51" strokeWidth={4} rx={10} />
    <defs>
      <pattern
        id="phone-pegboard_svg__a"
        width="16.327%"
        height="2.373%"
        patternContentUnits="objectBoundingBox"
        patternUnits="userSpaceOnUse"
        viewBox="54517 12389 48 48"
      >
        <rect width={8} height={12} x={54537} y={12407} fill="#353C51" rx={4} />
      </pattern>
    </defs>
  </svg>
);
export default SvgPhonePegboard;
