import { Peg } from "./Peg";
import { useEffect, useRef, useState } from "react";

const ITEM_WIDTH = 31;

interface PegRowProps {
  offset?: number
}

function RepeatingItem() {
  return (
    <div className="m-[10px]">
      <Peg></Peg>
    </div>
  );
}

export default function PegRow({ offset = 0 }: PegRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const updateItemCount = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        const count = Math.floor(width / ITEM_WIDTH);
        setItemCount(count > 0 ? count : 1);
      }
    };

    updateItemCount();
    window.addEventListener("resize", updateItemCount);
    return () => window.removeEventListener("resize", updateItemCount);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex"
      style={{ marginLeft: offset }}
    >
      {Array.from({ length: itemCount }).map((_, idx) => (
        <RepeatingItem key={idx} />
      ))}
    </div>
  );
}