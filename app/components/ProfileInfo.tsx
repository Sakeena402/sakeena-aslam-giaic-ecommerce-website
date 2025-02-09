// import Image from "next/image"
// import type { User } from "../types"

import { User } from "../(user)/(customer)/profile/types";

// interface ProfileInfoProps {
//   user: User
// }

// export default function ProfileInfo({ user }: ProfileInfoProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex items-center mb-4">
//         <Image
//           src={user.avatar || "/placeholder.svg"}
//           alt={user.name}
//           width={64}
//           height={64}
//           className="rounded-full mr-4"
//         />
//         <div>
//           <h2 className="text-xl font-semibold">{user.name}</h2>
//           <p className="text-gray-600">{user.email}</p>
//         </div>
//       </div>
//       <div className="mt-4">
//         <p className="text-gray-700">
//           <span className="font-semibold">Phone:</span> {user.phone}
//         </p>
//       </div>
//     </div>
//   )
// }


const ProfileDetails = ({ user }: { user: User }) => {
  return (
    <section className="mb-8 border-b pb-6">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="flex items-center gap-6">
        <img src={user.avatar} alt="Profile" className="w-20 h-20 rounded-full border" />
        <div className="-mt-10">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phoneNo}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
