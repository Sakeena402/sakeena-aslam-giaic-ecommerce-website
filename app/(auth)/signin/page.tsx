

'use client'

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { ChromeIcon as Google } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"  // This import is correct for Next.js 13+

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)  // To check if component is mounted
  const router = useRouter()

  useEffect(() => {
    setMounted(true)  // Mark component as mounted after first render
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simulate login logic (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)

    // Redirect to the dashboard
    router.push("/profile")
  }

  const handleGoogleSignIn = async () => {
    try {
      const res = await signIn('google', { callbackUrl: '/profile' });
      if (res?.error) {
        console.error('Error signing in with Google:', res.error);
        router.push('/auth/error?error=google'); // Redirect to error page if sign-in fails
      }
    } catch (error) {
      console.error('Error during sign-in process:', error);
      router.push('/error?error=unknown'); // Redirect to error page for any unexpected errors
    }
  };

  if (!mounted) return null  // Prevent rendering until mounted

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
            S
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome back</h2>
          <p className="text-gray-600 mt-2">Log in to your ShopNex account</p>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <Button
          variant="outline"
          className="w-full py-6 text-lg"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <Google className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        {/* Sign-up Link */}
        <div className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>

      </Card>
      <div><br /> <br /> <br /> <br /> <br /> <br /> <br /> </div>
    </div>
  )
}
// pages/auth/signin.tsx
// 'use client'
// import { signIn } from "next-auth/react";

// export default function SignIn() {
//   return (
//     <div>
//       <h1>Sign In</h1>
//       <button onClick={() => signIn('google')}>Sign in with Google</button>
//     </div>
//   );
// }
