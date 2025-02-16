'use client';

import React, { useState } from "react";
import { loginSchema } from "@/schemas/validationSchema";
import { useRouter } from 'next/navigation';
import GeneralForm from "@/app/components/forms/GeneralForm";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

const LoginPage = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { setUser } = useAuth();
  const router = useRouter();
  const { fetchUserData } = useCart();
  const onLogin = async (formData: Record<string, string>) => {
    try {
      const { email, password } = formData;
      
      // Make login request
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      // Fetch user details after login
      const userResponse = await fetch('/api/auth/me', { credentials: 'include' });
      const user = await userResponse.json();

      // Update global user authentication state
      setUser(user);
   
      // Redirect based on role
      router.push(user.role === "Admin" ? '/admin-dashboard' : '/profile');
      await fetchUserData()
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            if (error.response.data.error === "Email and password are required") {
              setLoginError("Please enter both email and password.");
            } else if (error.response.data.error === "User doesn't exist") {
              setLoginError("No account found with this email. Please sign up.");
            } else if (error.response.data.error === "Invalid password") {
              setLoginError("The password you entered is incorrect. Please try again.");
            } else {
              setLoginError("An error occurred. Please try again.");
            }
            break;
          case 500:
            setLoginError("Server error. Please try again later.");
            break;
          case 401:
            setLoginError("Please verify your email to log in.");
            break;
          default:
            setLoginError("An unexpected error occurred. Please try again.");
        }
      } else if (error.request) {
        setLoginError("No response from the server. Please check your connection.");
      } else {
        setLoginError("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <GeneralForm
        fields={[
          { name: "email", label: "Email", type: "email", required: true },
          { name: "password", label: "Password", type: "password", required: true },
        ]}
        buttonText="Login"
        onSubmit={onLogin}
        validationSchema={loginSchema}
        errorMessage={loginError}
      />
      <br />
<br /><br /><br /><br />
<br /><br /><br />
    </div>
  );
};
export default LoginPage;
