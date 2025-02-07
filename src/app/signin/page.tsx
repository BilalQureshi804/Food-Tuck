import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Image from "next/image";
export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
        <PageHeader title="Sign In" currentPage="Sign In" />

      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-lg bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" alt="Google" width={24} height={24} className="h-6 mr-2" />
              Sign-In with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/Apple.png" alt="Apple" width={24} height={24} className="h-6 mr-2" />
              Sign-In with Apple
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}