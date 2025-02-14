// import Image from "next/image"
// import type { User } from "../types"

import { User } from "../(user)/(customer)/profile/types";



const ProfileDetails = ({ user }: { user: User }) => {
  return (
    <section className="mb-8 border-b pb-6">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="flex items-center gap-6">
        <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full border" />
       
        <div className="-mt-2 p-3">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phoneNo}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
