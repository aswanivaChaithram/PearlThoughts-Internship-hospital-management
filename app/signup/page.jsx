"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-blue-100">
      
      <div className="w-full h-screen sm:h-auto sm:w-[420px] bg-white sm:rounded-3xl sm:shadow-lg p-8 flex flex-col justify-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-23 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
            <img src="/logo.jpeg" alt="logo" className="object-contain h-full" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3 mb-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4 outline-none"
        />

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl mb-6 cursor-pointer">
          Create Account
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
