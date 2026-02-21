"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="logo" className="w-14 h-14" />
            <h1 className="text-xl md:text-2xl font-bold text-blue-700">
              LifeShades Hospital
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-10 text-lg font-bold text-blue-700">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/doctor" className="nav-link">Doctors</Link>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-blue-700 cursor-pointer"
          >
            ☰
          </button>
        </nav>

        {/* -------- MOBILE SIDEBAR -------- */}
        <div className={`fixed top-0 ${ menuOpen ? "right-0" : "-right-full"} 
        w-full h-screen bg-white z-50 flex flex-col items-center justify-center 
        gap-8 transition-all duration-300 md:hidden`}>

          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-10 text-xl text-blue-700 cursor-pointer">
              ✖</button>

          <Link href="/" onClick={() => setMenuOpen(false)}
            className="text-xl font-bold text-blue-700">Home</Link>

          <Link href="/doctor" onClick={() => setMenuOpen(false)}
            className="text-xl font-bold text-blue-700">Doctors</Link>

          <Link href="/dashboard" onClick={() => setMenuOpen(false)}
            className="text-xl font-bold text-blue-700">Dashboard</Link>

          <Link href="/admin" onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white px-10 py-2 rounded-full font-semibold">
            Admin</Link>

          <Link href="/login" onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white px-10 py-2 rounded-full font-semibold">
            Login</Link>

        </div>

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

              <p className="mb-6">
                We care about your health
              </p>
              <Link
                href="/signup"
                className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition"
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