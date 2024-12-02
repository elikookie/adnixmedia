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
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 space-y-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`dot w-4 h-4 rounded-full cursor-pointer transition-transform transform ${
              activeSection === index
                ? "bg-gradient-to-br from-sky-500 to-purple-400 scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content Sections */}
      <div className="snap-y snap-mandatory overflow-y-auto h-full w-full">
        {/* Hero Section */}
        <section
          id="section-0"
          className="relative h-screen flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: "url('/backdrop.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="z-10 px-8">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-500 animate-fade-in">
              Adnix Media
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-light text-white max-w-2xl">
              Driving Bookings, Maximizing Revenue, and Growing Your Vacation
              Rental Business.
            </p>
            <Link href="#section-1">
              <button className="mt-10 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-teal-400 to-indigo-600 rounded-full shadow-lg hover:scale-110 transform transition-all text-white font-bold tracking-wide">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section
          id="section-1"
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="underline decoration-indigo-500">
              Who We Are
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl leading-relaxed">
            Adnix Media specializes in strategies designed to fill your calendar
            with bookings, boost your property&apos;s visibility, and increase
            revenue—all while saving you time.
          </p>
        </section>

        {/* Services Section */}
        <section
          id="section-2"
          className="bg-gradient-to-b from-slate-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-8 py-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-16">
            How We Help You Succeed
          </h2>
          <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-2 max-w-screen-xl">
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">
                Targeted Advertising
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reach the right guests at the right time with tailored ad
                campaigns.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✔ In-depth keyword research for high conversions.</li>
                <li>✔ Captivating ad copy for clicks.</li>
                <li>✔ Social media campaigns to extend reach.</li>
                <li>✔ Continuous optimization for ROI.</li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                SEO Optimization
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Improve visibility and organic traffic with proven SEO
                strategies.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>✔ Comprehensive keyword research.</li>
                <li>✔ On-page SEO improvements.</li>
                <li>✔ Technical SEO audits for performance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          id="section-3"
          className="relative flex items-center justify-center text-center h-screen bg-gradient-to-b from-blue-600 to-purple-900 text-white px-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Personalized strategies with a money-back guarantee to meet your
              unique needs.
            </p>
            <Link href="/contact">
              <button className="mt-8 px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full shadow-xl hover:scale-110 transition-transform font-semibold">
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
