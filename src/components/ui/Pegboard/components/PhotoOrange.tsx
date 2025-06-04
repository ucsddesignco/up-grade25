import type { SVGProps } from 'react';

interface PhotoOrangeProps extends SVGProps<SVGSVGElement> {
  rotation: number;
}

const SvgPhotoOrange = ({ rotation, ...props }: PhotoOrangeProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={300} height={270} fill="none" {...props}>
    <g className="clipless-photo" style={{ transform: `rotate(${rotation}deg)` }}>
      <g clipPath="url(#PhotoOrange_svg__a)">
        <path fill="#FFFFFE" d="M0 30h300v240H0z" />
        <rect
          width={80}
          height={40}
          x={20}
          y={50}
          fill="#FF8B39"
          stroke="#353C51"
          strokeWidth={4}
          rx={20}
        />
        <circle cx={60} cy={90} r={6.5} fill="#FFFFFE" stroke="#353C51" strokeWidth={3} />
        <rect width={115.573} height={245.092} x={148} y={70} fill="#353C51" rx={17} />
        <rect
          width={111.573}
          height={241.092}
          x={166}
          y={52}
          fill="#FFE8DC"
          stroke="#353C51"
          strokeWidth={4}
          rx={15}
        />
        <path
          stroke="#353C51"
          strokeLinecap="round"
          strokeWidth={4}
          d="M273 289 170 57m103 0L170 289"
        />
        <rect
          width={37.524}
          height={10.359}
          x={203.023}
          y={57.051}
          fill="#353C51"
          stroke="#353C51"
          rx={5.179}
        />
        <path fill="#FF8B39" stroke="#353C51" strokeWidth={4} d="M20.016 167.506h107v82h-107z" />
        <path
          stroke="#353C51"
          strokeWidth={4}
          d="M0-2h130.938"
          transform="matrix(-.79546 -.606 -.66967 .74266 124.078 249.575)"
        />
        <path
          stroke="#353C51"
          strokeWidth={4}
          d="M0-2h130.938"
          transform="matrix(.79546 -.606 .66967 .74266 22.922 249.575)"
        />
        <rect
          width={45.455}
          height={45.455}
          x={125.963}
          y={131.754}
          fill="#FF8B39"
          stroke="#353C51"
          strokeWidth={4}
          rx={8}
          transform="rotate(-45 125.963 131.754)"
        />
        <path
          fill="#fff"
          stroke="#353C51"
          strokeWidth={4}
          d="M108.271 198.972c-1.819-5.13 2.724-10.27 7.99-9.179l.252.057.034.009.035.009.385.109.036.01.037.012 33.344 10.827.022.008.022.007.221.077.034.012c6.291 2.334 5.963 11.399-.481 13.271l-.045.012-.226.06-.018.005-.018.004-11.995 2.951-1.691 12.963c-.917 7.022-10.488 8.398-13.346 1.918l-14.39-32.632-.014-.034-.014-.033-.148-.372-.014-.035z"
        />
        <path
          fill="#353C51"
          d="M113.964 197.061c-.349-.791.402-1.622 1.224-1.355l33.344 10.827c.957.311.907 1.682-.07 1.923l-15.314 3.769a1 1 0 0 0-.752.842l-2.135 16.352c-.131 1.003-1.499 1.2-1.907.274zM60 132h-2v2h2zm56.414 1.414a2 2 0 0 0 0-2.828l-12.728-12.728a2 2 0 1 0-2.828 2.828L112.172 132l-11.314 11.314a2 2 0 1 0 2.828 2.828zM60 95h-2v37h4V95zm0 37v2h55v-4H60z"
        />
        <path stroke="#353C51" strokeWidth={4} d="M2 32h296v236H2z" />
        <path
          className="photo-clip"
          fill="#646676"
          stroke="#353C51"
          strokeWidth={4}
          d="M134 2h32l-4.571 48h-22.858z"
        />
      </g>
    </g>

    <defs>
      <clipPath id="PhotoOrange_svg__a">
        <path fill="#fff" d="M0 0h300v270H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoOrange;
