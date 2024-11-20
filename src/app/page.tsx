"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Smooth scrolling behavior and section snapping
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer to track which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.id.split('-')[1], 10);
          setActiveSection(sectionIndex);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer when component is unmounted
    return () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="relative h-full overflow-hidden font-sans">
      <NavBar />
      {/* Dot Navigation Slider */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`dot w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === index ? 'bg-gradient-to-r from-blue-500 to-teal-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Scrollable Container */}
      <div className="snap-y snap-mandatory overflow-y-auto h-full w-full scroll-smooth">
        {/* Section 1 */}
        <section
          id="section-0"
          className="bg-fixed bg-cover bg-center h-screen flex items-center justify-center p-8 md:p-16"
          style={{
            backgroundImage: "url('/backdrop.jpg')",
          }}
        >
          <div className="text-center text-white drop-shadow-md animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Adnix Media</h1>
            <p className="text-lg md:text-2xl font-light">
              Driving Bookings, Maximizing Revenue, and Growing Your Vacation Rental Business.
            </p>
            <div className="mt-8">
              <Link href="#section-1">
                <p className="inline-block bg-blue-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-110 shadow-lg">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
        id="section-1"
        className="relative bg-gradient-to-r from-white to-gray-100 min-h-screen flex items-center justify-center px-8 md:px-16"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug">
              Who We Are
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Adnix Media is a digital marketing agency dedicated to helping vacation property owners succeed. We specialize
              in strategies designed to fill your calendar with bookings, boost your property&apos;s online visibility, and
              increase your revenue—all while saving you time.
            </p>
            <div className="mt-4">
              <Link href="#section-2">
                <p className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                  Explore Our Services
                </p>
              </Link>
            </div>
          </div>
      
          {/* Right Image */}
          <div className="relative group">
            <img
              src="/up.jpg"
              alt="Adnix Media Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Decorative Overlay */}
          </div>
        </div>
      </section>

        {/* Section 3 - Updated with Cards */}
        <section
  id="section-2"
  className="relative bg-gradient-to-tr from-blue-50 to-indigo-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16"
>
  <div className="max-w-screen-xl w-full">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">What We Offer</h2>

    <div className="relative py-2">
      {/* Timeline Vertical Line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-400 to-indigo-500 hidden md:block"></div>

      {/* Targeted Advertising */}
      <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Targeted Advertising</h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Reach the right guests with precision advertising that targets travelers actively looking for vacation
            rentals. Tailored campaigns ensure your property stands out.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:pl-8 mt-4 md:mt-0">
        </div>
      </div>

      {/* SEO Optimization */}
      <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16">
        <div className="relative w-full md:w-1/2 flex justify-center md:pr-8 mt-4 md:mt-0 order-2 md:order-1">

        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left order-1 md:order-2">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">SEO Optimization</h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Enhance your property&#39;s online visibility with effective SEO strategies. Drive organic traffic and
            improve search rankings for your listings.
          </p>
        </div>
      </div>

      {/* Social Media Management */}
      <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Social Media Management</h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Engage with travelers through impactful social media campaigns. Create meaningful connections that convert
            followers into bookings.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:pl-8 mt-4 md:mt-0">
        </div>
      </div>

      {/* Custom Content Creation */}
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 flex justify-center md:pr-8 mt-4 md:mt-0 order-2 md:order-1">
        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left order-1 md:order-2">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Custom Content Creation</h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Make your listings shine with compelling property descriptions, engaging blogs, and optimized content
            tailored to attract guests.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      
        {/* Section 4 */}
        <section
          id="section-3"
          className="relative bg-gradient-to-b from-blue-600 to-indigo-800 h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg md:text-xl max-w-screen-md mx-auto">
              With a focus on results and a money-back guarantee, we are committed to your success. Our personalized
              approach ensures strategies tailored to your property&#39;s unique needs.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <p className="inline-block bg-white text-black px-6 py-3 rounded-lg shadow-lg transform hover:scale-110">
                  Take Action Today!
                </p>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
