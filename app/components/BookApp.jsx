"use client";

import { useRouter } from "next/navigation";

export default function BookApp({ doctor }) {

  const router = useRouter();

  if (!doctor) return <div>No doctor found</div>;

  return (
    <div className="min-h-screen flex justify-center bg-white">

      <div className="w-[85%] md:w-[80%]">

        <div className="bg-gray-100 rounded-2xl p-5 shadow-md mt-6">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-gray-500">{doctor.role}</p>

              <p className="text-cyan-600 font-medium mt-1">
                {doctor.qualification}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Fellow of Sanskara netralaya,chennai
              </p>
            </div>

            <img src={doctor.image} alt="" className="w-24 h-26 rounded-xl" />

          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around text-center mt-8">

          {[
            { image: "/User.png", value: "5,000+", label: "patients" },
            { image: "/Activity.png", value: "10+", label: "years exper.." },
            { image: "/Star.png", value: "4.8", label: "rating" },
            { image: "/Chat.png", value: "4,942", label: "reviews" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">

              <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">
                <img src={item.image} alt="" />
              </div>

              <p className="text-cyan-600 font-semibold">
                {item.value}
              </p>

              <p className="text-gray-500 text-sm">
                {item.label}
              </p>

            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-lg">About Doctor</h3>

          <p className="text-gray-500 mt-2">
            {doctor.about}
          </p>
        </div>

        {/* Service */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">
            Service & Specialization
          </h3>

          <div className="flex justify-between mt-3 text-gray-500">

            <div>
              <p>Service</p>
              <p className="mt-2">Specialization</p>
            </div>

            <div className="text-right">
              <p>Medicare</p>
              <p className="mt-2">{doctor.role}</p>
            </div>

          </div>
        </div>

        {/* Availability */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">
            Availability For Consulting
          </h3>

          <div className="flex justify-between mt-3 text-gray-500">

            <p>Monday to Friday</p>
            <p>{doctor.time}</p>

          </div>
        </div>

        <div className="mt-10 mb-10">
          <button onClick={() => router.push(`/confirm/${doctor.id}`)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl text-lg cursor-pointer"
                >
                Book appointment
          </button>
        </div>

      </div>
    </div>
  );
}