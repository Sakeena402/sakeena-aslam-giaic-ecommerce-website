'use client';
import React, { useState } from "react";

import axios from "axios";

import { signupSchema } from "@/schemas/validationSchema";
import { useRouter } from 'next/navigation';
import GeneralForm from "@/app/components/forms/GeneralForm";
import AuthLayout from "@/app/components/layout/AuthLayout";

const SignupPage = () => {
  const [signupError, setSignupError] = useState<string | null>(null);
  const router = useRouter();

  const onSignUp = async (user: { username: string; email: string; phoneNo: string; address: string; password: string }) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      console.log("Signup successful");
      router.push("/verify-notification");
    } catch (error: any) {
      // Handle different types of errors
      if (error.response) {
        // Server responded with a status code
        switch (error.response.status) {
          case 400:
            setSignupError("All fields are required. Please fill in all fields.");
            break;
          case 409:
            setSignupError("A user with this email already exists. Please use a different email.");
            break;
          case 500:
            setSignupError("Server error. Please try again later.");
            break;
          default:
            setSignupError("An unexpected error occurred. Please try again.");
        }
      } else if (error.request) {
        // Request was made but no response received
        setSignupError("No response from the server. Please check your connection.");
      } else {
        // Something else happened in making the request
        setSignupError("An error occurred while signing up. Please try again.");
      }
    }
  };

  return (
    <><div>
      <br /> <br /> <br />

    </div><GeneralForm
        fields={[
          { name: "username", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phoneNo", label: "Phone Number", type: "text", required: true },
          { name: "address", label: "Address", type: "text", required: true },
          { name: "password", label: "Password", type: "password", required: true },
        ]}
        buttonText="Create Your Account"
        onSubmit={onSignUp}
        validationSchema={signupSchema}
        errorMessage={signupError} /><div>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
      </div></>
  );
};

export default SignupPage;























































































// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'
// import { useState,useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from 'axios';
// import React from "react";

// const SignUp = () => {
//   const [user, setUser] = useState({
//     username: '',
//     email: '',
//     phoneNo: '',
//     address: '',
//     password: '',
 
//   });
// const [buttonDisabled,setButtonDisabled]  = useState(false)
// const [loading,setLoading]=useState(false)
// const router = useRouter();

// useEffect(() => {
//   if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//       setButtonDisabled(false);
//   } else {
//       setButtonDisabled(true);
//   }
// }, [user]);

//   const onSignUp = async () => {

//     try {
//       setLoading(true)
//       setButtonDisabled(true)
//       const response = await axios.post("/api/auth/signup", user);
//       console.log("Signup sucess")
//       router.push('/login'); 
//     } catch (error:any) {
//       console.log("Signup failed", error.message);
      
  
//   }finally {
//     setTimeout(() => {
//       setLoading(false);
//       setButtonDisabled(false);
//   }, 1000);
//   }
 

//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Create Your Account
//         </h2>
//         <form className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               value={user.username}
//               onChange={(e) => setUser({ ...user, username: e.target.value })}
//               required
//               className="w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//               className="w-full px-3 py-2 mt-1  text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               value={user.phoneNo}
//               onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
//               required
//               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <input
//               type="text"
//               value={user.address}
//               onChange={(e) => setUser({ ...user, address: e.target.value })}
//               required
//               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               required
//               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//             />
//           </div>
         
//           <button
//             type="button"
//             onClick={onSignUp}
//             disabled={buttonDisabled}
//             className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
//                 buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
//             }`}
//         >
//             {loading ? 'Processing...' : 'Sign Up'}
//         </button>

//         </form>
//         <p className="text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-indigo-600 hover:underline">
//            Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// app/signup/page.tsx// app/signup/page.tsx