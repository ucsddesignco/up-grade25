import "./Dropdown.css";

interface DropdownProps {
  selected: number;
  onChange: (value: number) => void;
}

export default function Dropdown({ selected, onChange }: DropdownProps) {
  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        value={selected}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {[...Array(6).keys()].map((num) => (
          <option key={num} value={num}>
            Slide {num}
          </option>
        ))}
      </select>
    </div>
  );
}
