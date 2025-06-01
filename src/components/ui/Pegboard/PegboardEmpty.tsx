import './PegboardEmpty.css';

interface PegboardProps {
  color?: string;
}

export default function Pegboard({ color = '#EBEAE8' }: PegboardProps) {
  return (
    <>
      <div id="mobile-pegboard">
        <svg
          width="288"
          height="1010"
          viewBox="0 0 288 1010"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="284" height="1006" rx="6" fill={color} />
          <rect x="2" y="2" width="284" height="1006" rx="6" fill="url(#pattern0_8547_8339)" />
          <rect x="2" y="2" width="284" height="1006" rx="6" stroke="#353C51" strokeWidth="4" />
          <defs>
            <pattern
              id="pattern0_8547_8339"
              patternUnits="userSpaceOnUse"
              viewBox="74961 15840 48 48"
              width="16.666666666666664%"
              height="4.7524752475247523%"
              patternContentUnits="objectBoundingBox"
            >
              <rect x="74981" y="15858" width="8" height="12" rx="4" fill="#353C51" />
            </pattern>
          </defs>
        </svg>
      </div>
      <div id="tablet-pegboard">
        <svg
          width="630"
          height="875"
          viewBox="0 0 630 875"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="626" height="871" rx="6" fill={color} />
          <rect x="2" y="2" width="626" height="871" rx="6" fill="url(#pattern0_6943_33622)" />
          <rect x="2" y="2" width="626" height="871" rx="6" stroke="#353C51" strokeWidth="4" />
          <defs>
            <pattern
              id="pattern0_6943_33622"
              patternUnits="userSpaceOnUse"
              viewBox="9243 32429 48 48"
              width="7.6190476190476195%"
              height="5.4857142857142858%"
              patternContentUnits="objectBoundingBox"
            >
              <rect x="9263" y="32447" width="8" height="12" rx="4" fill="#353C51" />
            </pattern>
          </defs>
        </svg>
      </div>
      <div id="desktop-pegboard">
        <svg
          width="1205"
          height="682"
          viewBox="0 0 1205 682"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="1201" height="678" rx="6" fill={color} />
          <rect x="2" y="2" width="1201" height="678" rx="6" fill="url(#pattern0_6943_33623)" />
          <rect x="2" y="2" width="1201" height="678" rx="6" stroke="#353C51" strokeWidth="4" />
          <defs>
            <pattern
              id="pattern0_6943_33623"
              patternUnits="userSpaceOnUse"
              viewBox="8247 32429 48 48"
              width="3.9834024896265556%"
              height="7.0381231671554261%"
              patternContentUnits="objectBoundingBox"
            >
              <rect x="8267" y="32447" width="8" height="12" rx="4" fill="#353C51" />
            </pattern>
          </defs>
        </svg>
      </div>
    </>
  );
}
