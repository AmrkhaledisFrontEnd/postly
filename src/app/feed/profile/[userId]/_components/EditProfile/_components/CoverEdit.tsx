"use client";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IoMdPhotos } from "react-icons/io";
// =================================================================
function CoverEdit({
  coverPreview,
  setCoverFile,
  setCoverPreview,
}: {
  coverPreview: string;
  setCoverPreview: Dispatch<SetStateAction<string>>;
  setCoverFile: Dispatch<SetStateAction<File | null>>;
}) {
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setCoverFile(file);
      e.target.value = "";
    }
  };
  return (
    <div className="space-y-1">
      <h2 className="font-semibold">Cover Photo</h2>
      {coverPreview ? (
        <div className="relative group w-100 h-50 rounded-md">
          <Image
            fill
            src={coverPreview}
            alt="cover"
            className="object-cover "
          />
          <label
            htmlFor="cover"
            className="absolute -top-2 -right-2 active:scale-95 hover:scale-105 cursor-pointer bg-indigo-500 text-white transition-css text-xl  p-2 rounded-full"
          >
            <IoMdPhotos />
          </label>
        </div>
      ) : (
        <label
          htmlFor="cover"
          className="w-100 h-50 bg-linear-to-r from-indigo-300 to-pink-300 shadow hover:from-indigo-400 hover:to-pink-400 transition-css flex rounded-md items-center justify-center text-4xl text-white cursor-pointer"
        >
          <IoMdPhotos />
        </label>
      )}
      <input
        onChange={handle}
        type="file"
        hidden
        className="hidden"
        id="cover"
      />
    </div>
  );
}

export default CoverEdit;
