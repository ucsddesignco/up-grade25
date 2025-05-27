import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneFaqCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={312} height={202} fill="none" {...props}>
    <rect width={309} height={199} x={1.5} y={1.5} fill="#EBEAE8" rx={6.5} />
    <rect width={309} height={199} x={1.5} y={1.5} stroke="#353C51" strokeWidth={3} rx={6.5} />
    <path
      stroke="#646676"
      strokeWidth={2}
      d="M37 3v16M49 3v6M61 3v6M73 3v6M85 3v16M97 3v6M109 3v6M121 3v6M133 3v16M145 3v6M157 3v6M169 3v6M181 3v16M193 3v6M205 3v6M217 3v6M229 3v16M241 3v6M253 3v6M265 3v6M277 3v16M3 179h16M3 167h6M3 155h6M3 143h6M3 131h16M3 119h6M3 107h6M3 95h6M3 83h16M3 71h6M3 59h6M3 47h6M3 35h16"
    />
  </svg>
);
export default SvgPhoneFaqCard;
