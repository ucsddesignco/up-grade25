import { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';
import * as Select from '@radix-ui/react-select';
import DownArrowIcon from '../../../assets/icons/down-arrow.svg?react';
import { ROLE_COLORS, ROLES } from '../Pegboard/constants';

interface DropdownProps {
  selected: number;
  onChange: (value: string) => void;
}

export default function Dropdown({ selected, onChange }: DropdownProps) {
  const currentRole = ROLES[selected];
  const currentRoleIsTall = currentRole.length > 16;
  const roleListRef = useRef<HTMLUListElement>(null);
  const [navigatingIndex, setNavigatingIndex] = useState<number | null>(null);

  useEffect(() => {
    const roleList = roleListRef.current;
    const handleTransitionEnd = () => {
      setNavigatingIndex(null);
    };
    roleList?.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      roleList?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [selected]);

  let shouldExpand = false;
  if (navigatingIndex === null && currentRoleIsTall) {
    shouldExpand = true;
  } else if (navigatingIndex !== null && ROLES[navigatingIndex].length > 16) {
    shouldExpand = true;
  }

  return (
    <div className="dropdown-container">
      <Select.Root
        onValueChange={value => {
          onChange(value);
          setNavigatingIndex(Number(value));
        }}
        value={String(selected)}
        defaultValue={String(selected)}
      >
        <Select.Trigger className="SelectTrigger">
          <div className={`selected-role border-element ${shouldExpand ? 'expanded' : ''}`}>
            <ul
              ref={roleListRef}
              style={{
                transform: `translateY(-${shouldExpand ? selected * (100 / ROLES.length) : selected * (100 / ROLES.length) + 4}%)`
              }}
            >
              {ROLES.map(role => (
                <li key={role}>
                  <h2 className="role-text" style={{ color: ROLE_COLORS[role].text }}>
                    {role}
                  </h2>
                </li>
              ))}
            </ul>
            <DownArrowIcon className="down-arrow-icon" />
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="SelectContent border-element"
            position="popper"
            sideOffset={15}
            style={
              {
                '--pegboard-color': ROLE_COLORS[currentRole].pegboard
              } as React.CSSProperties
            }
          >
            <Select.Viewport className="SelectViewport">
              {ROLES.map((role, index) => (
                <Select.Item
                  onClick={() => {
                    console.log('clicked');
                  }}
                  key={role}
                  value={String(index)}
                  className="SelectItem"
                >
                  <Select.ItemText className="SelectItemText">{role}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
