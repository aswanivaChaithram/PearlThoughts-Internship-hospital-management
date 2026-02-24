"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    if (!form.username || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // store user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("Account created successfully!");
    router.push("/login");
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

        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        
        <input type="text"
          placeholder="Username"
          className="w-full border border-gray-400 rounded-lg p-3 mb-4 outline-none"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input type="email"
          placeholder="Mobile / Email"
          className="w-full border border-gray-400 rounded-lg p-3 mb-4 outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password"
          placeholder="Password"
          className="w-full border border-gray-400 rounded-lg p-3 mb-4 outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleSignup}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl mb-6 cursor-pointer">
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
