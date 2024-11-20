import { FaBullseye, FaSearch, FaFacebook, FaPen, FaChartBar } from 'react-icons/fa'; // Importing icons from react-icons
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-blue-900 pt-16">
      <NavBar />
      {/* Header */}
      <header className="text-center mb-16 mt-20 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">At Adnix Media, we offer a suite of tailored digital marketing solutions designed to help vacation rental property owners boost their bookings and grow their businesses.</p>
      </header>

      {/* Services Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
        {/* Service 1 - Targeted Online Advertising */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
              <FaBullseye size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold ml-4">Targeted Online Advertising</h3>
          </div>
          <p className="text-base md:text-lg text-gray-700">We create data-driven ad campaigns on platforms like Google and social media to reach travelers actively searching for vacation rentals.</p>
        </div>

        {/* Service 2 - SEO */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-green-500 text-white">
              <FaSearch size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold ml-4">Search Engine Optimization (SEO)</h3>
          </div>
          <p className="text-base md:text-lg text-gray-700">Enhance your property’s visibility with proven SEO strategies that help your website rank higher in search results, driving more organic traffic.</p>
        </div>

        {/* Service 3 - Social Media Management */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white">
              <FaFacebook size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold ml-4">Social Media Management</h3>
          </div>
          <p className="text-base md:text-lg text-gray-700">From engaging posts to ad campaigns, we’ll manage your social media presence to attract and convert followers into bookings.</p>
        </div>

        {/* Service 4 - Content Creation */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
              <FaPen size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold ml-4">Content Creation</h3>
          </div>
          <p className="text-base md:text-lg text-gray-700">Compelling property descriptions, engaging blogs, and optimized listings tailored to showcase your rentals and attract guests.</p>
        </div>

        {/* Service 5 - Analytics and Reporting */}
        <div className="bg-white border-2 border-blue-300 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-red-500 text-white">
              <FaChartBar size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold ml-4">Analytics and Reporting</h3>
          </div>
          <p className="text-base md:text-lg text-gray-700">We provide clear, actionable insights into your campaign performance, ensuring every decision is backed by data.</p>
        </div>
      </section>
      <br />
      <Footer/>
    </div>
  );
}
