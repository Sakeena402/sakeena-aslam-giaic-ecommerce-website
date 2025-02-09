// "use client"

// import { useState } from "react"

// import { Button } from "@/app/components/ui/button"
// import { Card } from "@/app/components/ui/card"
// import { Checkbox } from "@/app/components/ui/checkbox"
// import { Input } from "@/app/components/ui/input"
// import { Label } from "@/app/components/ui/label"
// import { ChromeIcon as Google } from "lucide-react"
// import Link from "next/link"

// export default function SignupPage() {
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setIsLoading(true)
//     // Here you would typically handle the form submission,
//     // e.g., send the data to your backend API
//     await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
//     setIsLoading(false)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
//       <Card className="w-full max-w-md p-8 space-y-6">
//         <div className="text-center">
//           <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
//             S
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
//           <p className="text-gray-600 mt-2">Join ShopNex and start your shopping journey</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" type="email" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" name="password" type="password" required />
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
//             disabled={isLoading}
//           >
//             {isLoading ? "Creating Account..." : "Create Account"}
//           </Button>
//         </form>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs uppercase">
//             <span className="bg-white px-2 text-gray-500">Or</span>
//           </div>
//         </div>

//         <Button variant="outline" className="w-full py-6 text-lg">
//           <Google className="mr-2 h-5 w-5" />
//           Continue with Google
//         </Button>

//         <div className="text-center text-sm text-gray-500">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 hover:underline">
//             Log in
//           </Link>
//         </div>

//         <div className="text-center text-xs text-gray-400">
//           By signing up, you agree to our Terms of Service and Privacy Policy.
//         </div>
//       </Card>
//     </div>
//   )
// }
'use client'
import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { ChromeIcon as Google } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"  // Import from 'next/navigation' in Next.js 13+

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)  // To ensure useRouter works

  const router = useRouter()

  useEffect(() => {
    setMounted(true)  // Mark as mounted after the component is rendered
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))  // Simulate API call
    setIsLoading(false)
    router.push("/login")  // Redirect to login after signup
  }

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    const response = await signIn("google", { redirect: false })
    if (response?.ok) {
      router.push("/dashboard")
    } else {
      setIsLoading(false)
      alert("Google sign-up failed. Please try again.")
    }
  }

  if (!mounted) return null  // Prevent rendering until mounted

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
            S
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
          <p className="text-gray-600 mt-2">Join ShopNex and start your shopping journey</p>
        </div>

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
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full py-6 text-lg"
          onClick={handleGoogleSignUp}
          disabled={isLoading}
        >
          <Google className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        <div className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </div>

        <div className="text-center text-xs text-gray-400">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </div>
      </Card>
    </div>
  )
}
