"use client";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { LuPencil } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
// ==============================================================
function ProfilePicture({
  profilePicturePreview,
  setProfilePicturePreview,
  setProfilePictureFile,
}: {
  profilePicturePreview: string;
  setProfilePicturePreview: Dispatch<SetStateAction<string>>;
  setProfilePictureFile: Dispatch<SetStateAction<File | null>>;
}) {
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicturePreview(URL.createObjectURL(file));
      setProfilePictureFile(file);
      e.target.value = "";
    }
  };
  return (
    <div className="space-y-1">
      <h2 className="font-semibold">Profile Picture</h2>
      {profilePicturePreview ? (
        <div className="size-30 rounded-full relative">
          <Image
            src={profilePicturePreview}
            alt="profile picture"
            fill
            className="object-cover rounded-full "
          />
          <label
            htmlFor="profile_picture"
            className="cursor-pointer absolute top-0 right-0 bg-white hover:bg-indigo-500 transition-css hover:text-white p-2 h-fit rounded-full"
          >
            <MdEdit />
          </label>
        </div>
      ) : (
        <label
          htmlFor="profile_picture"
          className="size-30 flex items-center  bg-linear-to-r from-indigo-300 to-purple-300 shadow rounded-full hover:from-indigo-400 hover:to-purple-400 transition-css justify-center text-2xl text-white cursor-pointer"
        >
          <LuPencil />
        </label>
      )}
      <input
        onChange={handle}
        type="file"
        id="profile_picture"
        hidden
        className="hidden"
      />
    </div>
  );
}

export default ProfilePicture;
