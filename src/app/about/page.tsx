import Link from "next/link";
import { FaChartLine, FaHandshake, FaDollarSign, FaComments, FaCogs } from "react-icons/fa";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-blue-900">
      <NavBar />

      {/* About Header Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">About us</span>
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            We are a group of talanted individuals that want to help your business reach new heights.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle, rgba(59,130,246,0.3), transparent)]"></div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-screen-lg mx-auto text-left flex flex-col md:flex-row items-center relative z-10 px-6 md:px-12 gap-12">
          <div className="flex-shrink-0 md:w-1/3">
            <FaChartLine size={150} className="text-white/30 opacity-90" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-5xl font-extrabold leading-tight mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              To empower vacation property owners by delivering innovative marketing solutions that drive results. We take pride in offering personalized services, clear communication, and measurable outcomes.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-500 opacity-30"></div>
      </section>

      {/* Why Choose Adnix Media Section */}
      <section className="relative py-32 bg-indigo-50 text-blue-900">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-center">
            Why Choose <span className="text-indigo-600">Adnix Media?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Expertise */}
            <div className="relative flex flex-col gap-6 items-start">
              <FaChartLine size={80} className="text-indigo-500" />
              <h3 className="text-4xl font-bold">Specialized Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus exclusively on vacation rental marketing, bringing specialized knowledge and effective strategies to help your property stand out.
              </p>
            </div>
            {/* Results */}
            <div className="relative flex flex-col gap-6 items-start">
              <FaHandshake size={80} className="text-indigo-500" />
              <h3 className="text-4xl font-bold">Results-Driven</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Delivering tangible results to maximize bookings and revenue through data-driven strategies tailored to your goals.
              </p>
            </div>
            {/* Guarantee */}
            <div className="relative flex flex-col gap-6 items-start">
              <FaDollarSign size={80} className="text-indigo-500" />
              <h3 className="text-4xl font-bold">Money-Back Guarantee</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our money-back guarantee ensures satisfaction. If we don&apos;t hit our targets, you get your money back.
              </p>
            </div>
            {/* Communication */}
            <div className="relative flex flex-col gap-6 items-start">
              <FaComments size={80} className="text-indigo-500" />
              <h3 className="text-4xl font-bold">Transparent Communication</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Clear communication ensures you&apos;re always informed about what&apos;s happening and how we&apos;re achieving your goals.
              </p>
            </div>
            {/* Scalable Solutions */}
            <div className="relative flex flex-col gap-6 items-start">
              <FaCogs size={80} className="text-indigo-500" />
              <h3 className="text-4xl font-bold">Scalable Solutions</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Flexible, scalable solutions designed to grow with your business and fit your budget and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Partner with Adnix Media?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Let us help you unlock the full potential of your vacation rental properties. Get in touch with us today!
          </p>
          <Link href="/contact">
            <p className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              Contact Us
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
