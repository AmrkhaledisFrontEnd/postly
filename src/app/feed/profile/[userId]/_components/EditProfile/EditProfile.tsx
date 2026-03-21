"use client";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import FormEditProfile from "./_components/FormEditProfile";
import ProfilePicture from "./_components/ProfilePicture";
import CoverEdit from "./_components/CoverEdit";
import { User } from "@prisma/client";
import Blur from "@/components/Blur/Blur";
// ==================================================================
function EditProfile({ userSession }: { userSession: User }) {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [profilePicturePreview, setProfilePicturePreview] = useState(
    userSession.image || "",
  );
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(
    null,
  );
  const [coverPreview, setCoverPreview] = useState(userSession.cover || "");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsEditProfile(true)}
        className="flex items-center border absolute top-3 right-3 border-gray-100 rounded-md py-2 px-4 font-semibold text-slate-500 hover:shadow transition-css cursor-pointer gap-1.5"
      >
        <FaRegEdit size={20} /> Edit
      </button>
      {isEditProfile && (
        <div className="inset-0 fixed bg-black/25 backdrop-blur z-50">
          <div className="bg-white w-2xl relative shadow p-5 mx-auto mt-6 rounded-md space-y-5 overflow-auto max-h-175">
            <h1 className="font-extrabold text-2xl">Edit Profile</h1>
            <ProfilePicture
              profilePicturePreview={profilePicturePreview}
              setProfilePicturePreview={setProfilePicturePreview}
              setProfilePictureFile={setProfilePictureFile}
            />
            <CoverEdit
              setCoverFile={setCoverFile}
              setCoverPreview={setCoverPreview}
              coverPreview={coverPreview}
            />
            <FormEditProfile
              loading={loading}
              setLoading={setLoading}
              user={userSession}
              profilePictureFile={profilePictureFile}
              coverFile={coverFile}
              setIsEditProfile={setIsEditProfile}
            />
          </div>
          {loading && <Blur />}
        </div>
      )}
    </>
  );
}

export default EditProfile;
