"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getUserData } from "@/helpers/getUserData";

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// contexts/AuthContext.tsx
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const userData = await getUserData();
      setUser(userData);
    } catch (error) {
      console.error("Authentication check failed:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};










// import { createContext, useContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// // Define AuthContext Type
// type AuthContextType = {
//   isLoggedIn: boolean;
//   user: any;
//   // login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// };

// // Create AuthContext
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // AuthProvider Component
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const router = useRouter();

//   // Check if user is logged in by reading cookies
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = Cookies.get("token");
//       if (token) {
//         try {
//           const res = await fetch("/api/auth/me");
//           const data = await res.json();
//           if (res.ok) {
//             setIsLoggedIn(true);
//             setUser(data.user);
//           } else {
//             setIsLoggedIn(false);
//             setUser(null);
//           }
//         } catch (error) {
//           console.error("Error fetching user", error);
//         }
//       } else {
//         setIsLoggedIn(false);
//         setUser(null);
//       }
//     };
//     fetchUser();
//   }, [Cookies.get("token")]); // Dependency added
  
//   // Login Function
//   // const login = async (email: string, password: string) => {
//   //   const res = await fetch("/api/login", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ email, password }),
//   //   });

//   //   if (res.ok) {
//   //     setIsLoggedIn(true);
//   //     router.push("/profile");
//   //   } else {
//   //     console.error("Invalid credentials");
//   //   }
//   // };

//   // Logout Function
//   const logout = () => {
//     Cookies.remove("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     router.push("/login");
//   };
  

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook to use Auth
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
