import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={150} height={236} fill="none" {...props}>
    <path fill="#646676" stroke="#353C51" strokeWidth={4} d="M65 147h10v28H65z" />
    <path fill="#646676" stroke="#353C51" strokeWidth={4} d="M61 167h18v26H61z" />
    <path
      fill="#F1A210"
      stroke="#353C51"
      strokeWidth={4}
      d="M58 175h24v52a7 7 0 0 1-7 7H65a7 7 0 0 1-7-7zM58 140h24v11a3 3 0 0 1-3 3H61a3 3 0 0 1-3-3z"
    />
    <circle cx={70} cy={75} r={68} fill="#646676" stroke="#353C51" strokeWidth={4} />
    <circle cx={69.5} cy={74.5} r={58.5} fill="#F1A210" stroke="#353C51" strokeWidth={4} />
    <path
      fill="#FFFFFE"
      stroke="#353C51"
      strokeWidth={4}
      d="M78.045 26.827A48.5 48.5 0 0 0 22.479 62.87l9.413 2.342a38.8 38.8 0 0 1 44.453-28.835zM85.384 120.253c10.59-3.704 19.572-10.892 25.441-20.362l-8.356-5.063c-4.696 7.576-11.88 13.327-20.353 16.29z"
    />
    <path
      fill="#FFFFFE"
      stroke="#353C51"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m117.5 2 6.47 23.636L148 32l-24.03 6.364L117.5 62l-6.47-23.636L87 32l24.03-6.364z"
    />
    <circle cx={56.057} cy={75.057} r={13.057} fill="#FFFFFE" stroke="#353C51" strokeWidth={4} />
    <circle cx={52.07} cy={73.049} r={8.035} fill="#353C51" />
    <circle cx={84.178} cy={75.057} r={13.057} fill="#FFFFFE" stroke="#353C51" strokeWidth={4} />
    <circle cx={80.197} cy={73.049} r={8.035} fill="#353C51" />
  </svg>
);
export default SvgGlass;
