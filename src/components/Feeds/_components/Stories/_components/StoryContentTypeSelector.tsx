"use client";

import { Dispatch, RefObject, SetStateAction } from "react";
import { LuText } from "react-icons/lu";
import { MdUpload } from "react-icons/md";
// =================================================================================
function StoryContentTypeSelector({
  setMediaFile,
  setMediaPreview,
  textareaRef,
}: {
  setMediaFile: Dispatch<SetStateAction<File | null>>;
  setMediaPreview: Dispatch<SetStateAction<string>>;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
}) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMediaPreview(URL.createObjectURL(file));
    setMediaFile(file);
    e.target.value = "";
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={() => {
          setMediaFile(null);
          setMediaPreview("");
          textareaRef.current?.focus();
        }}
        className="flex-1 bg-white  hover:scale-102 transition-css text-black py-2 cursor-pointer rounded sm:text-xl flex items-center justify-center"
      >
        <LuText />
      </button>
      <label
        htmlFor="select_media"
        className="flex-1 flex hover:scale-102 transition-css items-center sm:gap-3 gap-2 justify-center sm:text-[17px] text-sm cursor-pointer font-semibold bg-black/20 py-2  rounded"
      >
        <MdUpload size={23} />
        Photo/Video
      </label>
      <input
        onChange={handleFile}
        type="file"
        id="select_media"
        accept="image/*, video/*"
        hidden
        className="hidden"
      />
    </div>
  );
}

export default StoryContentTypeSelector;
