"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(parseInt(entry.target.id.split('-')[1], 10));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="relative h-full overflow-hidden font-sans">
      <NavBar />
      
      {/* Dot Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`dot w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === index ? 'bg-gradient-to-r from-sky-500 to-purple-200' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Content Sections */}
      <div className="snap-y snap-mandatory overflow-y-auto h-full w-full">
        {/* Hero Section */}
        <section
          id="section-0"
          className="relative h-screen flex items-center justify-center p-8"
          style={{
            backgroundImage: "url('/backdrop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold tracking-wider leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500 animate-slide-in">
              Adnix Media
            </h1>
            <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-8">
              Driving Bookings, Maximizing Revenue, and Growing Your Vacation
              Rental Business.
            </p>
            <Link href="#section-1">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-indigo-600 rounded-full shadow-xl hover:scale-110 transition">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section
          id="section-1"
          className="relative min-h-screen flex items-center px-8 bg-gradient-to-r from-gray-100 to-gray-50"
        >
          <div className="w-full max-w-screen-xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 text-center mb-6">
              <span className="underline decoration-indigo-500 decoration-4">
                Who We Are
              </span>
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Adnix Media specializes in strategies designed to fill your
              calendar with bookings, boost your property&apos;s visibility, and
              increase revenue—all while saving you time.
            </p>
          </div>
        </section>

        {/* Section 3 - Updated with Cards */}
        <section id="section-2" className="relative bg-gradient-to-br from-sky-100 to-white-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">

          <div className="max-w-screen-xl w-full">
          <h2 className="text-4xl font-extrabold text-center mb-12">What We Offer</h2>

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
          className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-purple-900 text-white"
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold">Why Choose Us?</h2>
            <p className="mt-6 max-w-md mx-auto text-lg">
              We provide personalized strategies with a money-back guarantee, ensuring your property&apos;s unique needs are met.
            </p>
            <Link href="/contact">
              <button className="mt-8 px-6 py-3 bg-white text-black rounded-full shadow-md transform hover:scale-110 transition">
                Take Action Today!
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
