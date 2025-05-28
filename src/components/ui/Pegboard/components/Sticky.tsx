import * as React from 'react';
import type { SVGProps } from 'react';

interface StickyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  title?: string;
  body?: string;
  titleFontSize?: string;
  bodyFontSize?: string;
  style?: React.CSSProperties;
}

const SvgSticky = ({ 
  color = "#F1A210", 
  title = "Title",
  body = "Body text",
  titleFontSize = "26px",
  bodyFontSize = "26px",
  ...props 
}: StickyProps) => {

  // Render body text with line breaks
  const renderBodyText = () => {
    const lines = body.split('\n');
    const lineHeight = parseInt(bodyFontSize) * 1.3;
    const startY = 120; // Starting Y position for body text
    
    return lines.map((line, index) => (
      <text
        x = '20'
        key={index}
        y={startY + (index * lineHeight)}
        fill="#353C51"
        fontSize={bodyFontSize}
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
      >
        {line}
      </text>
    ));
  };

  const renderTitleText = () => {
    const lines = title.split('\n');
    const lineHeight = parseInt(bodyFontSize) * 1.3;
    const startY = 90;
    
    return lines.map((line, index) => (
      <text
        x = '20'
        key={index}
        y={startY + (index * lineHeight)}
        fill="#353C51"
        fontSize={titleFontSize}
        dominantBaseline="middle"
        fontWeight="600"
      >
        {line}
      </text>      
    ));
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={220} height={270} fill="none" {...props}>
      <g clipPath="url(#Sticky_svg__a)">
        <path
          fill="#FFFFFE"
          stroke="#353C51"
          strokeWidth={4}
          d="M218.001 36v182H168v50H2l.001-232zm-2.829 186L172 265.172V222z"
        />
        <path fill={color} d="M216 38H4v27h212z" />
        <path stroke="#353C51" strokeWidth={4} d="M216 65H4" />
        
        {renderTitleText()}
        {renderBodyText()}
        
        <path fill="#646676" stroke="#353C51" strokeWidth={4} d="M94 2h32l-4.571 48H98.571z" />
      </g>
      <defs>
        <clipPath id="Sticky_svg__a">
          <path fill="#fff" d="M0 0h220v270H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgSticky;