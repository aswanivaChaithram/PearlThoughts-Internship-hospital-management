import Link from "next/link";

export default function Doctors() {
  const doctors = Array(8).fill({
    name: "Dr. Prakash das",
    role: "Sr. Psychologist",
    time: "09:30 AM - 07:00 PM",
    image: "/doc1.png",
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
            <Link href="#" className="nav-link">Dashboard</Link>
          </div>

          <Link
            href="/login"
            className="bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>

        <div className="text-center mt-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Meet Our Team
          </h2>
        </div>


        {/* Doctors Grid */}
        <div className="px-4 md:px-6 pb-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {doctors.map((doc, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 flex gap-4 shadow-lg transition bg-white cursor-pointer"
            >

              <img
                src={doc.image}
                alt="doctor"
                className="w-30 h-40 sm:h-45 md:h-50 object-cover rounded-xl"
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
          ))}
        </div>

      </div>
    </div>
  );
}