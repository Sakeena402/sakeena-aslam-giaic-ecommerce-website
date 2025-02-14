'use client';
import React, { useState } from "react";
import { signupSchema } from "@/schemas/validationSchema";
import { useRouter } from 'next/navigation';
import GeneralForm from "@/app/components/forms/GeneralForm";

const SignupPage = () => {
  const [signupError, setSignupError] = useState<string | null>(null);
  const router = useRouter();

  const onSignUp = async (formData: Record<string, string>) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

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
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
<br /> 
      <GeneralForm
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
        errorMessage={signupError}
      />
            <br /> <br /> <br />
        <br /> <br /> <br />
       
       
    </div>
  
     
  );
};

export default SignupPage;

















































































