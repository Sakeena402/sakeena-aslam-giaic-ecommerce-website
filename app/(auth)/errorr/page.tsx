import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center space-y-11">
        <h1 className="text-9xl font-extrabold tracking-widest text-black">404</h1>
        <div className="bg-black px-20 text-md rounded   text-white">
          Page Not Found
        </div>
        <div className="text-xl font-medium">
          Sorry, we couldn't find the page you're looking for.
        </div>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            <Link href="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-500 to-white"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-white via-gray-500 to-black"></div> */}
    </div>
  )
}
