// utils/getUserData.ts
export const getUserData = async () => {
  try {
    const response = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include", // Ensure cookies are sent with the request
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get user data");
    }

    return data; // { id, role, username, token }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
