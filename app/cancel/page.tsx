import Link from "next/link"
import { XCircle } from "lucide-react"

export default function Cancel() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your payment was not completed. Don't worry, you have not been charged.</p>
        <div className="bg-gray-50 rounded p-4 mb-6">
          <h2 className="font-semibold text-gray-700 mb-2">What happened?</h2>
          <p className="text-gray-600">The payment process was interrupted or cancelled. This could be due to:</p>
          <ul className="list-disc list-inside text-gray-600 text-left mt-2">
            <li>Cancellation by user</li>
            <li>Connection issues</li>
            <li>Payment method declined</li>
          </ul>
        </div>
        <div className="space-y-4">
          <Link
            href="/checkout"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

