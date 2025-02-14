// app/reset-password/page.tsx
'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordSchema } from "@/schemas/validationSchema";
import GeneralForm from "@/app/components/forms/GeneralForm";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
const ResetPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [validToken, setValidToken] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const { logout } = useAuth();
    const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(`/api/auth/verify-token?token=${token}`);
        const data = await response.json();
        setValidToken(data.isValid);
        if (!data.isValid) setErrorMessage("Invalid or expired token");
      } catch (error) {
        setErrorMessage("Error verifying token");
      }
    };

    if (token) verifyToken();
  }, [token]);
  const handleSubmit = async (formData: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          token,
          password: formData.password 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Password reset failed');
      }

      setSuccessMessage("Password reset successfully!");
      setErrorMessage(null);
      
      // Logout user if logged in
      await fetch('/api/auth/logout', { method: 'POST' });
      logout();

      setTimeout(() => router.push('/login'), 2000);

    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token || !validToken) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Invalid Token</h1>
          <p className="text-gray-600 mb-4">
            The password reset link is invalid or has expired.
          </p>
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Request new reset link
          </Link>
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Set New Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create a new password for your account
          </p>
        </div>
        <GeneralForm
          fields={[
            { name: "password", label: "New Password", type: "password", required: true },
            { name: "confirmPassword", label: "Confirm Password", type: "password", required: true }
          ]}
          buttonText={isSubmitting ? "Resetting..." : "Reset Password"}
          onSubmit={handleSubmit}
          validationSchema={resetPasswordSchema}
          errorMessage={errorMessage}
          successMessage={successMessage}
          isSubmitting={isSubmitting}
        />

        <div className="text-center text-sm">
          <Link 
            href="/login" 
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;