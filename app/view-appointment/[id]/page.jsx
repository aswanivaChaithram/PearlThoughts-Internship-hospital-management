"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function ViewApp() {

  const router = useRouter();
  const params = useParams();

  const [appointment, setAppointment] = useState(null);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("appointments")) || [];

    const found = data.find(
      (a) => a.appointmentNumber == params.id
    );

    setAppointment(found);

  }, [params.id]);


  const handleCancel = () => {

    const data = JSON.parse(localStorage.getItem("appointments")) || [];

    const updated = data.map((a) => {

      if (a.appointmentNumber == appointment.appointmentNumber) {
        return { ...a, status: "cancelled" };
      }
      return a;
    });

    localStorage.setItem("appointments", JSON.stringify(updated));

    setAppointment({ ...appointment, status: "cancelled" });
  };

  if (!appointment) return null;

  const timeStart = appointment.slot.split("-")[0];

  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

        {/* Doctor Card */}
        <div className="bg-gray-100 rounded-2xl p-5 shadow-md mt-6">

          <div className="flex items-center gap-4">

            <img src={appointment.image} className="w-24 h-26 rounded-xl"/>

            <div>
              <h2 className="text-xl font-bold">
                {appointment.doctorName}
              </h2>

              <p className="text-gray-500">
                {appointment.role}
              </p>

              <p className="text-gray-600">
                {appointment.qualification}
              </p>
            </div>

          </div>
        </div>

        {/* Appointment Info */}
        <div className="border border-gray-300 rounded-2xl p-5 mt-6">

          <p className="text-gray-500">
            Appointment Number:
          </p>

          <p className="text-xl font-semibold mb-4">
            #{appointment.appointmentNumber}
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Status */}
            <div>
              <p className="text-gray-500">Status</p>

              <p
                className={`font-semibold ${
                  appointment.status === "active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {appointment.status === "active"
                  ? "Active"
                  : "Cancelled"}
              </p>
            </div>

            {/* Reporting Time */}
            <div>
              <p className="text-gray-500">
                Reporting Time
              </p>

              <p className="font-semibold">
                Feb {appointment.date}, 2026 {timeStart}
              </p>
            </div>

            {/* Cancel Button */}
            {appointment.status === "active" && (
              <button
                onClick={handleCancel}
                className="border border-blue-500 text-red-500 px-6 py-3 rounded-xl cursor-pointer"
              >
                Cancel
              </button>
            )}

          </div>

        </div>

        {/* Patient Details */}
        <div className="mt-6">

          <h3 className="font-semibold text-lg mb-3">
            Add Patient Details
          </h3>

          <button className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-xl flex items-center gap-2">
            + Add Patient Details
          </button>

        </div>

        {/* View My Appointment */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl text-lg mt-10 mb-10 cursor-pointer"
        >
          View My Appointment
        </button>

      </div>
    </div>
  );
}