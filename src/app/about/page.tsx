import Link from 'next/link';
import { FaChartLine, FaHandshake, FaDollarSign, FaComments, FaCogs } from 'react-icons/fa';
import NavBar from '../components/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-blue-900 py-16">
      <NavBar />

      {/* About Header Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">About Adnix Media</h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto mb-8">We help vacation property owners maximize bookings and grow their businesses with our creative and data-driven strategies.</p>
      </section>

      {/* Our Mission Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center p-8 sm:p-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FaChartLine size={40} className="text-white mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
          </div>
          <p className="text-base sm:text-xl max-w-2xl mx-auto">To empower vacation property owners by delivering innovative marketing solutions that drive results. We take pride in offering personalized services, clear communication, and measurable outcomes.</p>
        </div>
      </section>

      {/* Why Choose Adnix Media Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-blue-50">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Why Choose Adnix Media?</h2>

        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-16 w-full">
          {/* Card Section */}
          {[{
            icon: <FaChartLine size={32} />,
            bgColor: 'bg-blue-500',
            borderColor: 'border-blue-500',
            title: 'Specialized Expertise',
            description: 'Our team focuses exclusively on vacation rental marketing, bringing specialized knowledge and effective strategies to help your property stand out.'
          }, {
            icon: <FaHandshake size={32} />,
            bgColor: 'bg-green-500',
            borderColor: 'border-green-500',
            title: 'Results-Driven',
            description: 'We deliver tangible results that maximize bookings and revenue through data-driven strategies tailored to your business goals.'
          }, {
            icon: <FaDollarSign size={32} />,
            bgColor: 'bg-yellow-500',
            borderColor: 'border-yellow-500',
            title: 'Money-Back Guarantee',
            description: 'Our money-back guarantee ensures your satisfaction. If we don\'t hit our targets, you get your money back.'
          }, {
            icon: <FaComments size={32} />,
            bgColor: 'bg-purple-500',
            borderColor: 'border-purple-500',
            title: 'Transparent Communication',
            description: 'We believe in clear communication. You\'ll always be informed about what\'s happening and how we are achieving your goals.'
          }, {
            icon: <FaCogs size={32} />,
            bgColor: 'bg-red-500',
            borderColor: 'border-red-500',
            title: 'Scalable Solutions',
            description: 'Our solutions are flexible and scalable, designed to grow with your business and fit your budget and needs.'
          }].map((card, index) => (
            <div key={index} className="flex flex-col items-center relative max-w-sm w-full">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full ${card.bgColor} text-white mb-6 shadow-lg`}>
                {card.icon}
              </div>
              <div className={`bg-white p-6 sm:p-8 rounded-xl border-t-4 ${card.borderColor} shadow-md w-full`}>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">{card.title}</h3>
                <p className="text-base sm:text-lg text-center text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="h-screen flex items-center justify-center p-8 sm:p-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to learn more about what we can do for you?</h2>
          <p className="text-lg sm:text-xl mb-8">Contact us today and let&apos;s discuss how we can help you succeed!</p>
          <Link href="/contact">
            <p className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">Contact Us</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
