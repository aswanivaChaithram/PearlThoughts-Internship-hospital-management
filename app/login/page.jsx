"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    let valid = true;

    // reset errors
    setEmailError("");
    setPasswordError("");

    if (!storedUser || storedUser.email !== email) {
      setEmailError("Incorrect Mobile / Email");
      valid = false;
    }

    if (!storedUser || storedUser.password !== password) {
      setPasswordError("Incorrect Password");
      valid = false;
    }

    if (valid) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/doctor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-blue-100">
      <div className="w-full h-screen sm:h-auto sm:w-[420px] bg-white sm:rounded-3xl sm:shadow-lg p-8 flex flex-col justify-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-23 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
            <img src="/logo.jpeg" alt="logo" className="object-contain h-full" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        {emailError && (
          <p className="text-red-500 text-sm mb-2">{emailError}</p>
        )}

        <input type="text"
          placeholder="Mobile / Email"
          className="w-full border border-gray-400 rounded-lg p-3 mb-4 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        {passwordError && (
          <p className="text-red-500 text-sm mb-2">{passwordError}</p>
        )}

        <input type="password"
          placeholder="Password"
          className="w-full border border-gray-400 rounded-lg p-3 mb-4 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <button className="text-red-500 cursor-pointer">Forgot Password</button>
        </div>

        <button onClick={handleLogin}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl mb-6 cursor-pointer">
          Login
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 text-sm">Or login With</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button className="w-full border border-gray-400 rounded-xl py-3 flex items-center 
        justify-center gap-3 font-semibold cursor-pointer">
          <img src="/google.png" alt="" />
          Continue with Google
        </button>

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
