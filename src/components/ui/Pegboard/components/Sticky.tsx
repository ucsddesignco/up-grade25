import type { SVGProps } from 'react';

interface BaseStickyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  body?: string;
  bodyFontSize?: string;
  style?: React.CSSProperties;
}

const BaseSticky = ({
  color = '#F1A210',
  body = 'Body text',
  bodyFontSize = '26px',
  ...props
}: BaseStickyProps) => {
  // Render body text with line breaks
  const renderBodyText = () => {
    const lines = body.split('\n');
    const lineHeight = parseInt(bodyFontSize) * 1.15;
    const startY = 90; // Starting Y position for body text

    return (
      <>
        {lines.map((line, index) => (
          <text
            x="20"
            key={index}
            y={startY + index * lineHeight}
            fill="#353C51"
            fontSize={bodyFontSize}
            dominantBaseline="middle"
            fontFamily="Funnel Sans"
            fontWeight="500"
          >
            {line}
          </text>
        ))}
        <text
          x="20"
          y={245}
          fill="#353C51"
          fontSize={bodyFontSize}
          dominantBaseline="middle"
          fontFamily="Funnel Sans"
          fontWeight="500"
        >
          - 2024 UP-Grader
        </text>
      </>
    );
  };

  return (
    <svg {...props} width="221" height="271" viewBox="0 0 221 271" fill="none">
      <g clipPath="url(#clip0_8547_8398)">
        <path
          d="M218.645 36.7568H2.64507L2.64453 268.757H168.645L218.645 218.757V36.7568Z"
          fill="#FFFFFE"
          stroke="#353C51"
          strokeWidth="4"
          strokeMiterlimit="16"
        />
        <path
          d="M168.645 268.757V218.757H218.645"
          stroke="#353C51"
          strokeWidth="4"
          strokeMiterlimit="16"
        />
        <path d="M216.645 38.7568H4.64461L4.64453 65.7568H216.645V38.7568Z" fill={color} />
        <path d="M216.645 65.7568H4.64453" stroke="#353C51" strokeWidth="4" />
        <path
          d="M94.6445 2.75684H126.645L122.073 50.7568H99.216L94.6445 2.75684Z"
          fill="#646676"
          stroke="#353C51"
          strokeWidth="4"
        />
        {renderBodyText()}
      </g>
      <defs>
        <clipPath id="clip0_8547_8398">
          <rect width="220" height="270" fill="white" transform="translate(0.644531 0.756836)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BaseSticky;
