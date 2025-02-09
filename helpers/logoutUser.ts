export const logoutUser = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        credentials: "include", // Ensures cookies are included
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Logout failed");
      }
  
      return data.message;
    } catch (error) {
      console.error("Error during logout:", error);
      return null;
    }
  };
  