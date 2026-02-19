"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-blue-100">
      
      <div className="w-full h-screen sm:h-auto sm:w-[420px] bg-white sm:rounded-3xl sm:shadow-lg p-8 flex flex-col justify-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-23 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
            <img src="/logo.jpeg" alt="logo" className="object-contain h-full" />
          </div>
        </div>

        <h2 className="ml-4 text-4xl font-bold text-blue-500 pl-20 mb-2">Welcome</h2>

        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {/* Email */}
        <input
          type="text"
          placeholder="Mobile / Email"
          className="w-full border rounded-lg p-3 mb-4 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4 outline-none"
        />

        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <button className="text-red-500">Forgot Password</button>
        </div>

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl mb-6 cursor-pointer">
          Login
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 text-sm">Or login With</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 cursor-pointer">
          <span className="text-lg">G</span>
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm mt-10">
          Don't have an account?{" "}
          <Link href="/signup" className="text-cyan-600 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
