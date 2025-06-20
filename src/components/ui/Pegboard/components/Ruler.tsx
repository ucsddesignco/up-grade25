import type { SVGProps } from 'react';

interface RulerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  rotation: number;
}

const SvgRuler = ({ color = '#F1A210', rotation, ...props }: RulerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={73}
    height={380}
    fill="none"
    {...props}
    style={{ overflow: 'visible' }}
  >
    <g
      className="clipless-ruler"
      clipPath="url(#Ruler_svg__a)"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.492 377.991h67.996v-364H2.492v364m22.996-345c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11"
        clipRule="evenodd"
      />
      <path
        stroke="#353C51"
        strokeWidth={4}
        d="M16.057 267.094H2.498m13.56 7.951H2.497m13.56 7.947H2.497m13.56 15.902H2.497m13.56 7.949H2.497m13.56 7.95H2.497m13.56 7.951H2.497m17.357 7.947H2.498m13.56 7.952H2.497m13.56 7.95H2.497m13.56 7.947H2.497m13.56 7.951H2.497m13.56-198.51H2.497m17.154 7.896H2.5m13.557 8.002H2.498m13.56 7.952H2.497m13.56 7.95H2.497m13.56 7.948H2.497m17.153 7.821H2.488m13.57 8.081H2.497m13.56 7.947H2.497m13.56 7.952H2.497m13.56 7.95H2.497m13.56 15.898H2.497m13.56-198.51H2.497m13.56 7.951H2.497m13.56 7.947H2.497m13.56 7.952H2.497m17.158 7.623H2.5m13.557 8.275H2.498m13.56 7.95H2.497m13.56 7.952H2.497m13.56 7.947H2.497m17.157 8.051H2.499m13.558 7.85H2.498m13.56 7.947H2.497m13.56 7.952H2.497m17.35 134.353H2.492m17.356-39.207H2.492m0 118.58v8h67.996v-364H2.492zm0 0h13.565m20.431-348c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11Z"
      />
    </g>
    <path className="hook" fill="#353C51" d="M43.488 6.991a7 7 0 1 0-14 0v25a7 7 0 1 0 14 0z" />
    <defs>
      <clipPath id="Ruler_svg__a">
        <path fill="#fff" d="M.488-.009h72v380h-72z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRuler;
