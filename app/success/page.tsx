


// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import Link from "next/link";
// import { CheckCircle } from "lucide-react";

// const Success = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const sessionId = searchParams.get('session_id');
//   const orderId = searchParams.get('order_id');

//   useEffect(() => {
//     if (!sessionId) router.push('/cart');
//   }, [sessionId, router]);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
//         <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
//         <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been processed successfully.</p>
//         <div className="bg-gray-50 rounded p-4 mb-6">
//           <h2 className="font-semibold text-gray-700 mb-2">Order Details</h2>
//           <p className="text-gray-600">Order #: {orderId || 'N/A'}</p>
//         </div>
//         <Link
//           href="/"
//           className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//         >
//           Return to Home
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default Success;
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    if (!sessionId) router.push('/cart');
  }, [sessionId, router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been processed successfully.</p>
        <div className="bg-gray-50 rounded p-4 mb-6">
          <h2 className="font-semibold text-gray-700 mb-2">Order Details</h2>
          <p className="text-gray-600">Order #: {orderId || 'N/A'}</p>
        </div>
        <Link
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

const Success = () => {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

export default Success;
