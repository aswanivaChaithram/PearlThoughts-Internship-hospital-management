import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">

      <div className="w-[85%] md:w-[80%]">

        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="logo" className="w-14 h-14" />
            <h1 className="text-xl md:text-2xl font-bold text-blue-700">
              LifeShades Hospital
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-10 text-lg font-bold text-blue-700">
              <Link href="#" className="nav-link">Home</Link>
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

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden">
          
          <img
            src="/header.webp"
            alt="hospital"
            className="w-full h-[460px] md:h-[450px] object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-16 w-l">

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Welcome to <br /> LifeShades Hospital
              </h1>

              <p className="mb-6">
                We care about your health
              </p>

              <Link
                href="/signup"
                className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition"
              >
                Create New Account
              </Link>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}