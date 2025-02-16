"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState(""); // Store email for resend
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function to verify the user's email
  const verifyUserEmail = async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/verifyemail", { token });
      router.push("/login");
    } catch (error: any) {
      setError(true);
      console.error("Verification Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

// Function to resend verification email
const resendVerificationEmail = async () => {
  try {
    setLoading(true);
    const response = await axios.post("/api/auth/resend-verification", { email });

    // Handle different response scenarios
    const message = response.data?.message;
    switch (message) {
      case "Verification email already sent":
        alert("A verification email has already been sent. Please check your inbox.");
        break;
      case "User already verified":
        alert("Your email is already verified. You can log in now.");
        router.push("/login"); // Redirect to login
        break;
      case "Verification email sent":
        alert("Verification email sent successfully. Please check your inbox.");
        break;
      default:
        alert("An unknown response was received. Please try again later.");
        break;
    }
  } catch (error: any) {
    console.error("Resend Email Error:", error.response?.data || error.message);
    alert("Failed to resend verification email. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  // Extract token and email from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    const urlEmail = urlParams.get("email");
    if (urlToken) setToken(urlToken);
    if (urlEmail) setEmail(urlEmail); // Set email for resending
  }, []);

  // Trigger verification when the token is set
  useEffect(() => {
    if (token) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Verify Email</h1>

      {loading && <h2 className="text-2xl text-blue-500">Verifying, please wait...</h2>}

      {error && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl text-red-600 font-semibold">Verification Failed</h2>
          <p className="mt-2">The token is invalid or has expired. Please request a new verification link.</p>
      
          <Button variant="destructive" size="default" onClick={resendVerificationEmail}>
            Resend Verification Email
          </Button>
        </div>
      )}
      <br />
<br /><br /><br /><br />
<br /><br /><br />
    </div>
  );
}


































// "use client";

// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function VerifyEmailPage() {
//   const [token, setToken] = useState("");
//   const [verified, setVerified] = useState(false);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Function to verify the user's email
//   const verifyUserEmail = async () => {
//     setLoading(true);
//     try {
//       // Sending token for verification
//       await axios.post("/api/auth/verifyemail", { token });
//       setVerified(true);
//       setError(false);
//     } catch (error: any) {
//       setError(true);
//       console.error("Verification Error:", error.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Extract token from URL
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const urlToken = urlParams.get("token");
//     if (urlToken) setToken(urlToken);
//   }, []);

//   // Trigger verification when the token is set
//   useEffect(() => {
//     if (token) {
//       verifyUserEmail();
//     }
//   }, [token]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-4xl font-bold mb-4">Verify Email</h1>

//       {/* Display the token for debugging */}
//       {token && (
//         <h2 className="p-2 mb-4 bg-gray-200 text-gray-800 rounded">
//           Token: <span className="font-semibold">{token}</span>
//         </h2>
//       )}

//       {/* Loading State */}
//       {loading && <h2 className="text-2xl text-blue-500">Verifying, please wait...</h2>}

//       {/* Verification Successful */}
//       {verified && (
//         <div className="mt-4 text-center">
//           <h2 className="text-2xl text-green-600 font-semibold">Email Verified Successfully!</h2>
//           <p className="mt-2">You can now login to your account.</p>
//           <Link href="/login" className="mt-4 text-blue-600 underline">
//             Go to Login
//           </Link>
//         </div>
//       )}

//       {/* Error Handling */}
//       {error && (
//         <div className="mt-4 text-center">
//           <h2 className="text-2xl text-red-600 font-semibold">Verification Failed</h2>
//           <p className="mt-2">The token is invalid or has expired. Please request a new verification link.</p>
//           <Link href="/resend-verification" className="mt-4 text-blue-600 underline">
//             Resend Verification Email
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
