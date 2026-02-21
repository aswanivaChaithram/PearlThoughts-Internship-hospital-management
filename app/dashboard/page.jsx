"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {

  const [activeMenu, setActiveMenu] = useState("appointments");
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="min-h-screen flex">

      {/* -------- LEFT SIDEBAR -------- */}
      <div className="w-[18%] min-h-screen bg-white shadow-md p-4 hidden md:flex flex-col gap-6">

        <button
          onClick={() => setActiveMenu("appointments")}
          className={`p-4 rounded-lg shadow text-left font-semibold transition
          ${activeMenu === "appointments"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"}`}
        >
          Appointments
        </button>

        <button
          onClick={() => setActiveMenu("records")}
          className={`p-4 rounded-lg shadow text-left font-semibold transition
          ${activeMenu === "records"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"}`}
        >
          Records
        </button>

        <button
          onClick={() => setActiveMenu("profile")}
          className={`p-4 rounded-lg shadow text-left font-semibold transition
          ${activeMenu === "profile"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"}`}
        >
          Profile
        </button>

      </div>


      {/* -------- RIGHT CONTENT -------- */}
      <div className="flex-1 p-6">

        {/* TOP TABS */}
        {activeMenu === "appointments" && (
          <>
            <div className="flex gap-20 mb-10 text-sm font-semibold">

              <button
                onClick={() => setActiveTab("upcoming")}
                className={
                  activeTab === "upcoming"
                    ? "text-blue-600"
                    : "text-gray-500"
                }
              >
                Upcoming
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={
                  activeTab === "completed"
                    ? "text-blue-600"
                    : "text-gray-500"
                }
              >
                Completed
              </button>

              <button
                onClick={() => setActiveTab("canceled")}
                className={
                  activeTab === "canceled"
                    ? "text-blue-600"
                    : "text-gray-500"
                }
              >
                Canceled
              </button>

            </div>


            {/* UPCOMING CONTENT */}
            {activeTab === "upcoming" && (
              <div className="flex flex-col items-center justify-center mt-48 text-center">

                <p className="text-black font-semibold text-lg mb-6">
                  You don't have an appointment yet
                </p>

                <p className="text-gray-400 font-semibold text-lg mb-14">
                  Please click the button below to book an appointment.
                </p>

                <Link
                  href="/doctor"
                  className="bg-blue-600 text-white px-10 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Book Appointment
                </Link>

              </div>
            )}
          </>
        )}

      </div>

    </div>
  );
}