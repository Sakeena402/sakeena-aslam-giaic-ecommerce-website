"use client";
import { logoutUser } from "@/helpers/logoutUser";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext"; // Import the Auth Context
import { Button } from "../ui/button";

const LogoutButton = () => {
  const router = useRouter();
  const { setUser } = useAuth(); // Get setUser from context

  const handleLogout = async () => {
    const message = await logoutUser();
    if (message) {
      alert(message); // Show success message
      setUser(null); // Update user state to null
      
      router.push("/login"); // Redirect to login page
    }
  };

  return (
<button
 
  className="md:px-8 md:py-2 md:text-lg px-6 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition "
  onClick={handleLogout}
>
  Logout
</button>

  );
};

export default LogoutButton;
