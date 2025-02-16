// app/forgot-password/page.tsx
'use client';

import React, { useState } from "react";
import { forgotPasswordSchema } from "@/schemas/validationSchema";
import GeneralForm from "@/app/components/forms/GeneralForm";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (formData: Record<string, string>) => {
    const email = formData.email;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSuccessMessage("Password reset link sent to your email!");
        setErrorMessage(null);
      } else {
        setErrorMessage(data.error || "Failed to send reset link");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* ... existing JSX ... */}
        <GeneralForm
          fields={[{ name: "email", label: "Email", type: "email", required: true }]}
          buttonText={isSubmitting ? "Sending..." : "Send Reset Link"}
          onSubmit={handleSubmit}
          validationSchema={forgotPasswordSchema}
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
      <br />
<br /><br /><br /><br />
<br /><br /><br />
    </div>
  );
};

export default ForgotPasswordPage;