import type { SVGProps } from 'react';
const SvgShelfMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="302"
    height="80"
    viewBox="0 0 302 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_8565_19357)">
      <rect
        x="2"
        y="-2"
        width="298"
        height="36"
        transform="matrix(1 0 0 -1 0 76)"
        fill="#646676"
        stroke="#353C51"
        strokeWidth="4"
      />
      <path
        d="M278 7C278 3.13401 274.866 0 271 0V0C267.134 0 264 3.13401 264 7V40H278V7Z"
        fill="#353C51"
      />
      <path
        d="M37 7C37 3.13401 33.866 0 30 0V0C26.134 0 23 3.13401 23 7L23 40H37L37 7Z"
        fill="#353C51"
      />
    </g>
    <defs>
      <clipPath id="clip0_8565_19357">
        <rect width="302" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShelfMobile;
