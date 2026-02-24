"use client";

import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

        {/* Navbar */}
        <nav className="flex items-center justify-between md:px-8 py-4 shadow-[0_4px_1px_-1px_rgba(0,0,0,0.1)]">
          
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.jpeg" alt="logo" className="w-14 h-14" />
            <h1 className="hidden sm:flex sm:text-2xl font-bold text-blue-500">
              LifeShades Hospital
            </h1>
          </div>

          <div className="md:flex items-center gap-6">
            <Link
              href="/login"
              className="bg-blue-500 text-white text-md sm:text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Login
            </Link>
          </div>

        </nav>

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden">
          
          <img
            src="/header.webp"
            alt="hospital"
            className="w-full h-[460px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-16 w-l">

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Welcome to <br /> LifeShades Hospital
              </h1>

              <p className="mb-6 text-lg font-bold">
                We care about your health
              </p>
              <Link
                href="/signup"
                className="bg-blue-500 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition"
              >
                Create New Account
              </Link>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10">
          <hr className="border-gray-300 w-full" />
          <p className="text-center text-sm text-black py-4">
            &copy; 2026 LifeShades Hospital. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}