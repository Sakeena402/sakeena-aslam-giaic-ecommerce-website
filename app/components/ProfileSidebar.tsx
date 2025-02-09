import { User } from "@/components/types";

const ProfileSidebar = () => {
  return (
    <aside className="w-64 border-r pr-6">
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="hover:text-black cursor-pointer">Profile Information</li>
        <li className="hover:text-black cursor-pointer">Shipping & Billing</li>
        <li className="hover:text-black cursor-pointer">Order History</li>
        <li className="hover:text-black cursor-pointer">Payment Methods</li>
      </ul>
    </aside>
  );
};

export default ProfileSidebar;
