"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {

  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState("appointments");
  const [activeTab, setActiveTab] = useState("upcoming");

  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);

  // Load appointments + user
  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
       router.replace("/");
    }

    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);

  }, [router]);

  // Cancel appointment
  const handleCancel = (appointmentNumber) => {

    const updated = appointments.map((a) => {
      if (a.appointmentNumber === appointmentNumber) {
        return { ...a, status: "cancelled" };
      }
      return a;
    });

    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  const upcoming = appointments.filter((a) => a.status === "active");
  const canceled = appointments.filter((a) => a.status === "cancelled");
  const completed = appointments.filter((a) => a.status === "completed");

  const AppointmentCard = ({ a, showCancel }) => {

    const timeStart = a.slot.split("-")[0];

    return (
      <div className="border border-gray-300 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <p className="font-semibold">{a.doctorName}</p>
          <p className="text-gray-500">{a.role}</p>
          <p className="text-gray-600">{a.qualification}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">#{a.appointmentNumber}</p>
          <p className="font-semibold">
            Feb {a.date}, 2026 {timeStart}
          </p>
        </div>

        {showCancel && (
          <button
            onClick={() => handleCancel(a.appointmentNumber)}
            className="border border-blue-500 text-red-500 px-6 py-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT MENU */}
      <div className="w-[18%] min-h-screen bg-white shadow-md p-4 hidden md:flex flex-col gap-6">

        <button
          onClick={() => setActiveMenu("appointments")}
          className={`p-4 rounded-lg shadow text-left font-semibold cursor-pointer
          ${activeMenu === "appointments"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
            }`}
        >
          Appointments
        </button>

        <button
          onClick={() => setActiveMenu("records")}
          className={`p-4 rounded-lg shadow text-left font-semibold cursor-pointer
          ${activeMenu === "records"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
            }`}
        >
          Records
        </button>

        <button
          onClick={() => setActiveMenu("profile")}
          className={`p-4 rounded-lg shadow text-left font-semibold cursor-pointer
          ${activeMenu === "profile"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
            }`}
        >
          Profile
        </button>

      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-6">

        {/* ================= APPOINTMENTS ================= */}
        {activeMenu === "appointments" && (
          <>
            <div className="flex items-center justify-between mb-10 font-semibold">

              <div className="flex items-center justify-between gap-4 sm:gap-20 md:gap-30 font-semibold">
                <button
                onClick={() => setActiveTab("upcoming")}
                className={`${activeTab === "upcoming"
                    ? "text-blue-500"
                    : "text-gray-500"
                  } cursor-pointer`}
              >
                Upcoming
              </button>

              <button
                onClick={() => setActiveTab("completed")}
                className={`${activeTab === "completed"
                    ? "text-blue-500"
                    : "text-gray-500"
                  } cursor-pointer`}
              >
                Completed
              </button>

              <button
                onClick={() => setActiveTab("cancelled")}
                className={`${activeTab === "cancelled"
                    ? "text-blue-500"
                    : "text-gray-500"
                  } cursor-pointer`}
              >
                Cancelled
              </button>
              </div>

              <Link
          href="/doctor"
          className="border border-blue-500 text-blue-500 p-2 rounded-full text-center font-semibold ml-9 cursor-pointer"
        >
          Book Appointment
        </Link>

            </div>

            {/* UPCOMING */}
            {activeTab === "upcoming" && (
              <>
                {upcoming.length === 0 ? (
                  <div className="flex flex-col items-center justify-center mt-56 text-center">

                    <p className="text-black font-semibold text-lg">
                      You don't have an appointment yet
                    </p>

                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {upcoming.map((a) => (
                      <AppointmentCard
                        key={a.appointmentNumber}
                        a={a}
                        showCancel={true}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* COMPLETED */}
            {activeTab === "completed" && (
              <>
                {completed.length === 0 ? (
                  <div className="flex items-center justify-center mt-56 text-center">

                    <p className="text-black font-semibold text-lg">
                      No Completed Appointments
                    </p>

                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {completed.map((a) => (
                      <AppointmentCard
                        key={a.appointmentNumber}
                        a={a}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* CANCELED */}
            {activeTab === "cancelled" && (
              <>
                {canceled.length === 0 ? (

                  <div className="flex items-center justify-center mt-56 text-center">

                    <p className="text-black font-semibold text-lg">
                        No Cancelled appointments
                    </p>

                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {canceled.map((a) => (
                      <AppointmentCard
                        key={a.appointmentNumber}
                        a={a}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ================= PROFILE ================= */}
        {activeMenu === "profile" && user && (
          <div className="flex flex-col gap-6 max-w-md">

            <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-gray-500">Username</p>
              <p className="font-semibold">{user.username}</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-gray-500">Email / Mobile</p>
              <p className="font-semibold">{user.email}</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-gray-500">Password</p>
              <p className="font-semibold">{user.password}</p>
            </div>

            <button
              className="border border-blue-500 text-red-500 px-6 py-3 rounded-lg w-fit mt-10 cursor-pointer"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                router.replace("/");
              }}
            >
              Log Out
            </button>

          </div>
        )}

      </div>
    </div>
  );
}