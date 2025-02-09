// app/forgot-password/page.tsx;;
'use client'
import React from "react";
import GeneralForm from "@/components/forms/GeneralForm";
import axios from "axios";
import router from "next/router";

const ForgotPasswordPage = () => {


  const onForgotPassword = async (user: { email: string }) => {
    try {
      
      const response = await axios.post("/api/auth/forgot-password", user);
      console.log(" forgot password")
      router.push('/user/reset-confirmation'); 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log("Password reset request failed", error.message);
      
  
  
  }
 
  };

  return (
    <GeneralForm
      fields={[{ name: "email", label: "Email", type: "email", required: true }]}
      buttonText="Reset Password"
      onSubmit={onForgotPassword}
      redirectPath="/reset-confirmation" // Redirect after password reset request
    />
  );
};

export default ForgotPasswordPage;
