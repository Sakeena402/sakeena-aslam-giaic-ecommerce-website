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
    <Button variant="destructive" size="default" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
