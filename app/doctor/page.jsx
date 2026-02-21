"use client";

import React, { useState } from "react";
import Link from "next/link";
import doctors from "../data/doctors";

export default function Doctors() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredDoctors = doctors.filter((doc) => {
    if (!query) return true;
    return doc.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

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
        <div className={`fixed top-0 ${menuOpen ? "right-0" : "-right-full"} 
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

          <Link href="/login" onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white px-10 py-2 rounded-full font-semibold">
            Login</Link>

        </div>

        <div className="text-center mt-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Meet Our Team
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
            <div className="flex items-center justify-center border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
              <input
                type="text"
                placeholder="Search Doctor"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') setQuery(input); }}
                className="ml-3 flex-1 outline-none text-sm text-gray-700 bg-transparent"
              />

              <button
                onClick={() => setQuery(input)}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-full cursor-pointer"
                aria-label="Search doctors"
              >
                Search
              </button>
            </div>
          </div>
        </div>


        {/* Doctors Grid */}
        <div className="px-4 md:px-6 pb-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {filteredDoctors.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-500 py-8">
              No doctors found
            </div>
          ) : (
            filteredDoctors.map((doc) => {
              return (
                <div
                  key={doc.id}
                  className="rounded-2xl p-4 flex gap-4 shadow-lg transition bg-white cursor-pointer"
                >

                  <img
                    src={doc.image}
                    alt="doctor"
                    className="w-30 h-40 object-cover rounded-xl"
                  />

                  <div className="flex flex-col justify-between flex-1">

                    <div>
                      <h3 className="text-md font-bold text-gray-800">
                        {doc.name}
                      </h3>

                      <p className="text-cyan-600 font-medium">
                        {doc.role}
                      </p>

                      <span className="inline-block mt-1 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        Available today
                      </span>

                      <p className="text-xs text-gray-500 mt-1">
                        As Psychologist Dr das practices about 7+ years....
                      </p>
                    </div>

                    <div className="mt-1">
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {doc.time}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}