// components/SubmitButton.tsx
'use client'
import React from "react";
// In SubmitButton.tsx, update the interface:
interface SubmitButtonProps {
  loading: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Make optional and add event type
}

// Update the component implementation:
const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, text, onClick }) => {
  return (
    <button
      type="submit" // Add type="submit" for form handling
      onClick={onClick}
      disabled={loading}
      className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
      }`}
    >
      {loading ? "Processing..." : text}
    </button>
  );
};
export default SubmitButton;