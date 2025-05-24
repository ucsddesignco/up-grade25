import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShelfMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={302} height={80} fill="none" {...props}>
    <g clipPath="url(#ShelfMobile_svg__a)">
      <path fill="#646676" stroke="#353C51" strokeWidth={4} d="M2 78h298V42H2z" />
      <path fill="#353C51" d="M278 7a7 7 0 1 0-14 0v33h14zM37 7a7 7 0 1 0-14 0v33h14z" />
    </g>
    <defs>
      <clipPath id="ShelfMobile_svg__a">
        <path fill="#fff" d="M0 0h302v80H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShelfMobile;
