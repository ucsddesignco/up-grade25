import PegRow from "./PegRow";
import { Item } from "./Item"

const NUM_ROWS = 10
const OFFSET_PER_ROW = 0

export default function Pegboard() {
  return (
    <>
        <div>
            <Item></Item>
        </div>
        <div className="w-screen flex flex-col justify-center border border-red rounded-md border-[#d48181]">
        {Array.from({ length: NUM_ROWS }).map((_, rowIdx) => {
            const offset = rowIdx % 2 === 1 ? OFFSET_PER_ROW : 0;
            return <PegRow key={rowIdx} offset={offset} />;
        })}
        </div>
    </>
  );
}