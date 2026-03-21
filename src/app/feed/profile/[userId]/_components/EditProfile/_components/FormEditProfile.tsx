"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import FormFieldEditProfile from "./FormFieldEditProfile";
import toast from "react-hot-toast";
import { EditProfileSchema } from "@/lib/Schemas/Edit/EditProfile.schema";
import { User } from "@prisma/client";
import { uploadMedia } from "@/lib/uplaodMedia";
import { EditProfileAction } from "@/lib/Actions/Edit/EditProfile.action";
import { useRouter } from "next/navigation";
// ============================================================================
function FormEditProfile({
  user,
  setIsEditProfile,
  profilePictureFile,
  coverFile,
  loading,
  setLoading,
}: {
  user: User;
  setIsEditProfile: Dispatch<SetStateAction<boolean>>;
  profilePictureFile: File | null;
  coverFile: File | null;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [fullName, setFullName] = useState(user.name || "");
  const [username, setUsername] = useState(user.username || "");
  const [bio, setBio] = useState(user.bio || "");
  const [location, setLocation] = useState(user.location || "");
  const router = useRouter();
  console.log(location)
  // =====
  const handleEditProfile = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const validation = EditProfileSchema.safeParse({
        userId: user.id,
        fullName,
        username,
        bio,
        location,
      });
      if (!validation.success)
        return toast.error(validation.error.issues[0].message, {
          className: "toast-font",
        });
      let image: { error: string } | { media: string } | null = null;
      if (profilePictureFile) {
        image = await uploadMedia(profilePictureFile, "users-images");
      }
      if (image && "error" in image)
        return toast.error(image.error, { className: "toast-font" });
      let cover: { error: string } | { media: string } | null = null;
      if (coverFile) {
        cover = await uploadMedia(coverFile, "users-covers");
      }
      if (cover && "error" in cover)
        return toast.error(cover.error, { className: "toast-font" });
      const result = await EditProfileAction({
        userId: user.id,
        fullName,
        bio,
        location,
        cover: cover?.media,
        picture: image?.media,
        username,
      });
      if (!result.success)
        return toast.error(result.message, { className: "toast-font" });
      toast.success(result.message, { className: "toast-font" });
      setIsEditProfile(false)
      router.refresh();
    } catch (error) {
      console.log(error);
      return toast.error("Profile editing failed. Please try again later", {
        className: "toast-font",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleEditProfile}
      className="space-y-4 font-semibold text-slate-700 relative"
    >
      <FormFieldEditProfile
        label="Full Name"
        id="full_name"
        value={fullName}
        setState={setFullName}
        type="text"
        placeholder="Enter your full name"
      />
      <FormFieldEditProfile
        label="User Name"
        id="user_name"
        value={username}
        setState={setUsername}
        type="text"
        placeholder="Enter your user name"
      />
      <FormFieldEditProfile
        label="Bio"
        id="bio"
        value={bio}
        setState={setBio}
        type="text"
        placeholder="Add Bio"
      />
      <FormFieldEditProfile
        label="Location"
        id="location"
        value={location}
        setState={setLocation}
        type="text"
        placeholder="Enter your location"
      />
      <div className="space-x-4 mt-10 flex items-center">
        <button className="text-white w-37.5 h-10 bg-linear-to-r from-indigo-500 to-purple-500 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center transition-css py-2 px-4 rounded-md">
          {loading ? (
            <span className=" size-6 block border-2 rounded-full border-t-transparent animate-spin border-white" />
          ) : (
            "Save Changes"
          )}
        </button>
        <button
          onClick={() => setIsEditProfile(false)}
          className="text-gray-500 border border-gray-300 active:scale-95 transition-css hover:scale-105 rounded-md cursor-pointer py-2 px-6"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FormEditProfile;
