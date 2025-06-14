import type { SVGProps } from 'react';

interface PhotoGreenProps extends SVGProps<SVGSVGElement> {
  rotation: number;
}

const SvgPhotoGreen = ({ rotation, ...props }: PhotoGreenProps) => (
  <svg
    style={{ transform: `rotate(${rotation}deg)` }}
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={270}
    fill="none"
    {...props}
  >
    <g clipPath="url(#PhotoGreen_svg__a)">
      <path fill="#FFFFFE" d="M0 30h300v240H0z" />
      <path
        fill="#353C51"
        d="M168.627 93c0-12.702 10.297-23 23-23h60c12.703 0 23 10.298 23 23 0 7.609-3.699 14.348-9.383 18.531.141 1.337.398 2.388.775 3.357.53 1.365 1.356 2.728 2.715 4.617l4.514 6.275C263.5 125 257 121 252.627 116h-61c-12.504 0-22.677-9.978-22.992-22.406z"
      />
      <mask
        id="PhotoGreen_svg__b"
        width={108}
        height={58}
        x={160.26}
        y={60.999}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M160.26 60.999h108v58h-108z" />
        <path d="M244.26 65c11.045 0 20 8.955 20 20 0 7.184-3.789 13.482-9.476 17.008.205 4.594 1.401 7.082 4.148 10.9-4.99-.835-9.192-3.435-11.781-8.117-.944.136-1.909.209-2.891.209h-60c-11.046 0-20-8.954-20-20s8.954-20 20-20z" />
      </mask>
      <path
        fill="#8BB660"
        d="M244.26 65c11.045 0 20 8.955 20 20 0 7.184-3.789 13.482-9.476 17.008.205 4.594 1.401 7.082 4.148 10.9-4.99-.835-9.192-3.435-11.781-8.117-.944.136-1.909.209-2.891.209h-60c-11.046 0-20-8.954-20-20s8.954-20 20-20z"
      />
      <path
        fill="#353C51"
        d="M264.26 85h4zm-9.476 17.008-2.108-3.4-1.992 1.236.104 2.343zm4.148 10.9-.66 3.945 9.578 1.601-5.671-7.882zm-11.781-8.117 3.501-1.936-1.338-2.419-2.736.396zm-2.891.209v4zm-80-20h-4zm20-20v-4zm60 0v4c8.836 0 16 7.164 16 16h8c0-13.254-10.745-24-24-24zm20 20h-4c0 5.742-3.023 10.78-7.584 13.609l2.108 3.399 2.108 3.4c6.814-4.225 11.368-11.782 11.368-20.407zm-9.476 17.008-3.996.179c.118 2.637.532 4.866 1.402 7.044.849 2.128 2.059 4.017 3.495 6.013l3.247-2.336 3.247-2.336c-1.311-1.823-2.073-3.087-2.559-4.306-.466-1.168-.752-2.48-.84-4.436zm4.148 10.9.659-3.946c-3.936-.658-7.011-2.619-8.939-6.107l-3.501 1.936-3.5 1.935c3.248 5.877 8.577 9.116 14.621 10.127zm-11.781-8.117-.573-3.959q-1.143.166-2.318.168v8c1.181 0 2.338-.088 3.465-.251zm-2.891.209v-4h-60v8h60zm-60 0v-4c-8.837 0-16-7.163-16-16h-8c0 13.255 10.745 24 24 24zm-20-20h4c0-8.836 7.163-16 16-16v-8c-13.255 0-24 10.746-24 24zm20-20v4h60v-8h-60z"
        mask="url(#PhotoGreen_svg__b)"
      />
      <circle cx={263} cy={71} r={10} fill="#353C51" />
      <path fill="#8BB660" stroke="#353C51" strokeWidth={4} d="M174 270V169h29v101z" />
      <path fill="#E7F3DD" stroke="#353C51" strokeWidth={4} d="M203 270V152h31v118z" />
      <path fill="#8BB660" stroke="#353C51" strokeWidth={4} d="M234 270v-76h31v76z" />
      <path fill="#353C51" d="M-49 275V114h193v161z" />
      <path fill="#E7F3DD" stroke="#353C51" strokeWidth={4} d="M-10 94h133.681v174H-10z" />
      <path fill="#8BB660" stroke="#353C51" strokeWidth={4} d="M-10 94h134v32H-10z" />
      <path
        stroke="#353C51"
        strokeLinecap="round"
        strokeWidth={4}
        d="M77.76 96.27v170.217M32.86 95.513v170.218M-9.318 197h132.49"
      />
      <path stroke="#353C51" strokeWidth={4} d="M2 32h296v236H2z" />
      <path fill="#646676" stroke="#353C51" strokeWidth={4} d="M134 2h32l-4.571 48h-22.858z" />
      <path
        fill="#fff"
        stroke="#353C51"
        strokeWidth={4}
        d="M102.271 185.972c-1.819-5.13 2.724-10.27 7.99-9.179l.252.057.034.009.035.009.385.109.036.01.037.012 33.344 10.827.022.008.022.007.221.077.034.012c6.291 2.334 5.963 11.399-.481 13.271l-.045.012-.226.06-.018.005-.018.004-11.995 2.951-1.691 12.963c-.917 7.022-10.488 8.398-13.346 1.918l-14.39-32.632-.014-.034-.014-.033-.148-.372-.014-.035z"
      />
      <path
        fill="#353C51"
        d="M107.964 184.061c-.349-.791.402-1.622 1.224-1.355l33.344 10.827c.957.311.907 1.682-.07 1.923l-15.314 3.769a1 1 0 0 0-.752.842l-2.135 16.352c-.131 1.003-1.499 1.2-1.907.274z"
      />
    </g>

    <defs>
      <clipPath id="PhotoGreen_svg__a">
        <path fill="#fff" d="M0 0h300v270H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoGreen;
