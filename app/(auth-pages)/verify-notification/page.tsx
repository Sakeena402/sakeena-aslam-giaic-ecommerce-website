"use client";

import Link from "next/link";

export default function VerifyNotificationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Verify Your Email</h1>
      <p className="text-lg mb-6">
        We have sent a verification link to your email address. Please check your inbox and follow the link to verify your email before logging in.
      </p>
      <Link href="/login">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
          Go to Login
        </button>
        
      </Link>
    </div>
  );
}
