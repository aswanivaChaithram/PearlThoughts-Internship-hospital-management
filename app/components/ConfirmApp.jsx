"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmApp({ doctor }) {

  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Load booked slots function
  const loadBookedSlots = () => {

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const activeSlots = existing
      .filter(
        (a) =>
          a.doctorId === doctor.id &&
          a.status === "active"
      )
      .map((a) => `${a.date}-${a.slot}`);

    setBookedSlots(activeSlots);
  };

  // Run when page loads + when returning from other pages
  useEffect(() => {

    loadBookedSlots();

    window.addEventListener("focus", loadBookedSlots);

    return () =>
      window.removeEventListener("focus", loadBookedSlots);

  }, [doctor.id]);

  const dates = [
    { day: 13, label: "MON" },
    { day: 14, label: "TUE" },
    { day: 15, label: "WED" },
    { day: 16, label: "THU" },
    { day: 17, label: "FRI" },
    { day: 18, label: "SAT" },
    { day: 19, label: "SUN" },
    { day: 20, label: "MON" },
    { day: 21, label: "TUE" },
    { day: 22, label: "WED" },
    { day: 23, label: "THU" },
    { day: 24, label: "FRI" },
    { day: 25, label: "SAT" },
    { day: 26, label: "SUN" },
    { day: 27, label: "MON" },
    { day: 28, label: "TUE" },
  ];

  const slots = [
    "09:30 AM - 09:45 AM",
    "10:00 AM - 10:15 AM",
    "10:30 AM - 10:45 AM",
    "11:00 AM - 11:15 AM",
    "11:30 AM - 11:45 AM",
    "12:00 PM - 12:15 PM",
    "12:30 PM - 12:45 PM",
    "01:00 PM - 01:15 PM",
  ];

  const eveningSlots = [
    "3:00 PM - 3:15 PM",
    "3:30 PM - 3:45 PM",
    "4:00 PM - 4:15 PM",
    "4:30 PM - 4:45 PM",
  ]

  const handleBook = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select date and slot");
      return;
    }

    const appointmentNumber = Math.floor(Math.random() * 1000);

    const newAppointment = {
      appointmentNumber,
      doctorId: doctor.id,
      doctorName: doctor.name,
      role: doctor.role,
      qualification: doctor.qualification,
      image: doctor.image,
      date: selectedDate,
      slot: selectedSlot,
      status: "active",
    };

    // Get existing appointments
    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

      existing.push(newAppointment);

      localStorage.setItem("appointments", JSON.stringify(existing));

      // refresh slots immediately
      loadBookedSlots();


    //const updated = [...existing, newAppointment];

    //localStorage.setItem("appointments", JSON.stringify(updated));

      router.push(`/view-appointment/${appointmentNumber}`);
    };

    const isDisabled = (slot) => {
        if (!selectedDate) return false;
        return bookedSlots.includes(`${selectedDate}-${slot}`);
  };

  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

        <div className="bg-gray-100 rounded-2xl p-5 shadow-md mt-6">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-gray-500">{doctor.role}</p>

              <p className="text-gray-600 mt-1">
                {doctor.qualification}
              </p>
            </div>

            <img src={doctor.image} alt="" className="w-24 h-26 rounded-xl" />
           
          </div>
        </div>

        <h3 className="mt-6 font-semibold text-lg">
          Book Appointment
        </h3>

        <h4>Feb, 2026</h4>

        {/* Date Scroll */}
        <div className="flex gap-3 overflow-x-auto overflow-y-hidden mt-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {dates.map((d, i) => (
            <div
              key={i}
              onClick={() => setSelectedDate(d.day)}
              className={`min-w-[70px] cursor-pointer rounded-xl border border-gray-300 p-3 text-center
              ${
                selectedDate === d.day
                  ? "bg-cyan-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              <p className="text-lg font-bold">{d.day}</p>
              <p className="text-xs">{d.label}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-6 font-semibold">Select slot</h3>

        <div className="grid grid-cols-2 gap-3 mt-3">

          {slots.map((slot, i) => {

            const disabled = isDisabled(slot);

            return (
              <button key={i} disabled={disabled} onClick={() => setSelectedSlot(slot)}
                className={`border border-gray-300 rounded-xl p-3 text-sm font-semibold cursor-pointer
                ${selectedSlot === slot
                    ? "bg-cyan-500 text-white"
                    : "text-gray-600"
                  }
                ${disabled && "opacity-40 cursor-not-allowed"}
                `}
              >
                {slot}
              </button>
            );
         })}
        </div>

        {/* Evening */}
        <h3 className="mt-6 font-semibold">Evening Slot</h3>

        <div className="grid grid-cols-2 gap-3 mt-3">

          {eveningSlots.map((slot, i) => {

            const disabled = isDisabled(slot);

            return (
              <button key={i} disabled={disabled} onClick={() => setSelectedSlot(slot)}
                className={`border border-gray-300 rounded-xl p-3 text-sm font-semibold cursor-pointer
                ${selectedSlot === slot
                    ? "bg-cyan-500 text-white"
                    : "text-gray-600"
                  }
                ${disabled && "opacity-40 cursor-not-allowed"}
                `}
              >
                {slot}
              </button>
            );
          })}
        </div>

        <div className="mt-8 mb-10">

          <button onClick={handleBook}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl text-lg cursor-pointer">
                Book appointment
          </button>

        </div>

      </div>
    </div>
  );
}