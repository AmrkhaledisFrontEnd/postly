"use client";
import { FaCheck } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
// =============================================================================================
function Colors({
  setStoryBgColor,
  storyBgColor,
  bg_colors,
}: {
  setStoryBgColor: Dispatch<SetStateAction<string>>;
  storyBgColor: string;
  bg_colors: string[];
}) {
  return (
    <div className="flex items-center w-full justify-between">
      {bg_colors.map((color, index) => (
        <button
          onClick={() => setStoryBgColor(color)}
          style={{ backgroundColor: color }}
          className={`sm:size-6 size-4 sm:text-[15px] text-xs flex items-center justify-center ring cursor-pointer ${storyBgColor === color && "ring-2"}`}
          key={index}
        >
          {storyBgColor=== color && <FaCheck/>}
        </button>
      ))}
    </div>
  );
}

export default Colors;
