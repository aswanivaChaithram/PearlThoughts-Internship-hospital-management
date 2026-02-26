"use client";

import React from "react";

export default function PatientDetails() {
  return (
    <div className="min-h-screen flex justify-center bg-white">
      <div className="w-[85%] md:w-[80%] py-6">

        <h1 className="text-2xl font-semibold text-black mb-6 mt-6">
          Patient Details
        </h1>

        <div className="mb-5">
          <label className="block text-sm text-black mb-2">Full name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div className="flex gap-4 mb-5">
          <div className="w-1/2">
            <label className="block text-sm text-black mb-2">Age</label>
            <input
              type="number"
              placeholder="Enter age"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-black mb-2">Gender</label>
            <select
              defaultValue=""
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option>Men</option>
              <option>Women</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm text-black mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-black mb-2">Weight</label>
          <input
            type="number"
            placeholder="Enter weight in kg"
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-black mb-2">Problem</label>
          <textarea
            placeholder="Write something about your problem"
            rows={4}
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none resize-none"
          />
        </div>

        <div className="mb-10">
          <select
            defaultValue="Relation with Patient"
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          >
            <option disabled>Relation with Patient</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Brother</option>
            <option>Sister</option>
          </select>
        </div>

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl text-lg font-medium cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
}