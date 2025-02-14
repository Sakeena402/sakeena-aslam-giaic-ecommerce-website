// app/password-reset-success/page.tsx
'use client';

import Link from "next/link";

export default function PasswordResetSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Password Reset Successful!
        </h1>
        <p className="mt-2 text-gray-600">
          Your password has been successfully updated.
        </p>
        {/* <Link
          href="/login"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Return to Login
        </Link> */}
      </div>
    </div>
  );
}