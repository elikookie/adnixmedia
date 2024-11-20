"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // JavaScript for smooth scrolling behavior with section snapping
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
    <div className="relative h-full overflow-hidden">
      <NavBar />
      {/* Dot Navigation Slider */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`dot w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition ${
              activeSection === index ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Scrollable Container */}
      <div className="snap-y snap-mandatory overflow-y-auto h-full w-full">
        {/* Section 1 */}
        <section id="section-0" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white h-screen flex items-center justify-center p-8 md:p-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Welcome to Adnix Media</h1>
            <p className="text-lg md:text-2xl">Driving Bookings, Maximizing Revenue, and Growing Your Vacation Rental Business.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-1" className="bg-white text-blue-900 h-screen flex items-center justify-center p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-base md:text-xl">Adnix Media is a digital marketing agency dedicated to helping vacation property owners succeed. We specialize in strategies designed to fill your calendar with bookings, boost your property&#39;s online visibility, and increase your revenue—all while saving you time.</p>
            </div>
            <img src="teamwork.png" alt="Teamwork illustration" className="w-full max-w-xs md:max-w-sm mx-auto" />
          </div>
        </section>

        {/* Section 3 - Updated with Cards */}
        <section id="section-2" className="bg-blue-50 text-blue-900 h-screen flex items-center justify-center p-8 md:p-16">
          <div className="max-w-screen-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                    🌐
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold ml-4">Targeted Advertising</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600">Reach the right guests with precision advertising that targets travelers actively looking for vacation rentals.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-green-500 text-white">
                    🔍
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold ml-4">SEO Optimization</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600">Enhance your property&#39;s online visibility with effective SEO strategies that bring organic traffic to your listings.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white">
                    📱
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold ml-4">Social Media Management</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600">Engage with travelers through well-crafted posts and ads that convert followers into bookings.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 md:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
                    🖋
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold ml-4">Custom Content Creation</h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600">Make your listings shine with compelling property descriptions, engaging blogs, and optimized content tailored to attract guests.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-3" className="bg-gradient-to-t from-blue-400 to-indigo-600 text-white h-screen flex items-center justify-center p-8 md:p-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-base md:text-xl max-w-screen-md mx-auto">With a focus on results and a money-back guarantee, we are committed to your success. Our personalized approach ensures strategies tailored to your property&#39;s unique needs.</p>
            <br />
            <Link href="/contact">
              <p className="mt-10 inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">Take Action Today!</p>
            </Link>
          </div>
        </section>
        <Footer/>
      </div>

    </div>
  );
}
