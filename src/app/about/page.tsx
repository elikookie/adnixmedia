import Link from 'next/link';
import { FaChartLine, FaHandshake, FaDollarSign, FaComments, FaCogs } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-blue-900 py-16">
      {/* About Header Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-16">
        <h1 className="text-5xl font-bold mb-8">About Adnix Media</h1>
        <p className="text-2xl max-w-3xl mx-auto mb-8">We help vacation property owners maximize bookings and grow their businesses with our creative and data-driven strategies.</p>
      </section>

      {/* Our Mission Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center p-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaChartLine size={50} className="text-white mr-4" />
            <h2 className="text-4xl font-bold">Our Mission</h2>
          </div>
          <p className="text-xl max-w-2xl mx-auto">To empower vacation property owners by delivering innovative marketing solutions that drive results. We take pride in offering personalized services, clear communication, and measurable outcomes.</p>
        </div>
      </section>

           {/* Why Choose Adnix Media Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-16 bg-blue-50">
      <h2 className="text-5xl font-bold mb-12 text-center">Why Choose Adnix Media?</h2>

      <div className="flex flex-wrap justify-center items-start gap-16">
        {/* Specialized Expertise */}
        <div className="flex flex-col items-center relative max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 text-white mb-6 shadow-lg">
            <FaChartLine size={32} />
          </div>
          <div className="bg-white p-8 rounded-xl border-t-4 border-blue-500 shadow-md w-full">
            <h3 className="text-3xl font-semibold mb-4 text-center">Specialized Expertise</h3>
            <p className="text-lg text-center text-gray-700">Our team focuses exclusively on vacation rental marketing, bringing specialized knowledge and effective strategies to help your property stand out.</p>
          </div>
        </div>

        {/* Results-Driven Strategies */}
        <div className="flex flex-col items-center relative max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500 text-white mb-6 shadow-lg">
            <FaHandshake size={32} />
          </div>
          <div className="bg-white p-8 rounded-xl border-t-4 border-green-500 shadow-md w-full">
            <h3 className="text-3xl font-semibold mb-4 text-center">Results-Driven</h3>
            <p className="text-lg text-center text-gray-700">We deliver tangible results that maximize bookings and revenue through data-driven strategies tailored to your business goals.</p>
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="flex flex-col items-center relative max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500 text-white mb-6 shadow-lg">
            <FaDollarSign size={32} />
          </div>
          <div className="bg-white p-8 rounded-xl border-t-4 border-yellow-500 shadow-md w-full">
            <h3 className="text-3xl font-semibold mb-4 text-center">Money-Back Guarantee</h3>
            <p className="text-lg text-center text-gray-700">Our money-back guarantee ensures your satisfaction. If we don&apos;t hit our targets, you get your money back.</p>
          </div>
        </div>

        {/* Transparent Communication */}
        <div className="flex flex-col items-center relative max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-500 text-white mb-6 shadow-lg">
            <FaComments size={32} />
          </div>
          <div className="bg-white p-8 rounded-xl border-t-4 border-purple-500 shadow-md w-full">
            <h3 className="text-3xl font-semibold mb-4 text-center">Transparent Communication</h3>
            <p className="text-lg text-center text-gray-700">We believe in clear communication. You&#39;ll always be informed about what&#39;s happening and how we are achieving your goals.</p>
          </div>
        </div>

        {/* Scalable Solutions */}
        <div className="flex flex-col items-center relative max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-500 text-white mb-6 shadow-lg">
            <FaCogs size={32} />
          </div>
          <div className="bg-white p-8 rounded-xl border-t-4 border-red-500 shadow-md w-full">
            <h3 className="text-3xl font-semibold mb-4 text-center">Scalable Solutions</h3>
            <p className="text-lg text-center text-gray-700">Our solutions are flexible and scalable, designed to grow with your business and fit your budget and needs.</p>
          </div>
        </div>
      </div>
    </section>
      {/* Call to Action Section */}
      <section className="h-screen flex items-center justify-center p-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Want to learn more about what we can do for you?</h2>
          <p className="text-xl mb-8">Contact us today and let&apos;s discuss how we can help you succeed!</p>
          <Link href="/contact">
            <p className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">Contact Us</p>
          </Link>
        </div>
      </section>
    </div>
  );
}