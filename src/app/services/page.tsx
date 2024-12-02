import { FaBullseye, FaSearch, FaInstagram , FaChartBar } from "react-icons/fa";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Services() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-white to-indigo-50 text-indigo-900 overflow-hidden relative">
      <NavBar />

      {/* Header Section */}
      <header className="text-center py-20 px-6 md:px-12 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            Transforming Your Rentals
          </span>
          <br />
          <span className="text-black">With Cutting-Edge Solutions</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed mt-4">
          At Adnix Media, we provide premium digital marketing strategies to
          elevate your vacation rental business. Let’s drive bookings, grow your
          audience, and bring your properties to life.
        </p>
      </header>

      {/* Section: Targeted Online Advertising */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-indigo-50 via-sky-100 to-white">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-blue-600">
              Precision in Advertising
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
              We deliver data-driven, targeted online campaigns tailored to reach
              vacationers actively searching for properties like yours. From
              Google Ads to social media, we ensure every click counts.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <FaBullseye size={100} className="text-blue-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section: SEO */}
      <section className="relative py-20 px-6 md:px-12 bg-sky-50">
        <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(circle at center, rgba(59,130,246,0.15), transparent)]"></div>
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center relative z-10">
          <div className="md:w-1/2 flex justify-center relative">
            <FaSearch size={100} className="text-indigo-400 animate-pulse" />
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-indigo-600">
              Dominate Search Rankings
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
              Increase your visibility on search engines with our advanced SEO
              techniques. We help your website rank higher, driving organic
              traffic and more bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Social Media Management */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-l from-sky-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 rounded-full bg-sky-300 opacity-30 blur-3xl top-1/4 left-1/3"></div>
          <div className="absolute w-56 h-56 rounded-full bg-indigo-200 opacity-20 blur-3xl bottom-10 left-1/4"></div>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-blue-600">
              Build a Social Presence
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
              From Instagram to Facebook, we craft engaging social media
              strategies to captivate your audience and convert followers into
              bookings.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <FaInstagram size={100} className="text-sky-400 animate-pulse" />
          </div>
        </div>
      </section>


      {/* Section: Analytics and Reporting */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-blue-200 to-sky-400">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle at bottom left, rgba(255,255,255,0.2), transparent)]"></div>
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Insights That Matter
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-grey-600">
              Access detailed analytics and actionable reporting to ensure your
              marketing efforts are driving results. Data-backed decisions lead
              to smarter investments.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <FaChartBar size={100} className="text-sky-100 animate-pulse" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}