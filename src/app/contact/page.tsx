"use client";

import { InlineWidget } from "react-calendly";
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div className="pt-12 bg-gradient-to-br from-blue-50 to-blue-200 text-blue-900 min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 md:px-12 mt-20 relative">
        <header className="text-center mb-16 mt-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Let&apos;s Create Something Amazing Together
          </h1>
          <p className="text-xl md:text-2xl mt-6 font-light">
            Reach out to us for inquiries or schedule your consultation below.
          </p>
        </header>

        <section className="relative z-10 text-center mb-16">
          <p className="text-lg md:text-xl mt-4">
            <span>Email: </span>
            <a
              href="mailto:info@adnixmedia.com"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              info@adnixmedia.com
            </a>
          </p>
          <p className="text-lg md:text-xl mt-2">
            <span>Phone: </span>+353 89 217 1490
          </p>
        </section>

        {/* Unified Container for Discovery Call and Calendly */}
        <div className="relative max-w-7xl mx-auto bg-white/90 rounded-xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-8 mb-12">
          {/* Discovery Call Information */}
          <div className="flex-1 flex flex-col justify-center">
            <img src="logo.png" className="w-64" />
            <h2 className="text-3xl font-bold mt-6 mb-4">Discovery Call</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Duration:</strong> 45 minutes
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>What you&apos;ll get:</strong>
            </p>
            <ul className="text-lg text-gray-700 list-disc list-inside mb-4">
              <li>Roadmap on how to scale your business</li>
              <li>Deep dive into your business marketing operations</li>
            </ul>
            <p className="text-lg text-gray-700">
              This call is perfect if you&apos;re representing an ambitious business looking to improve and scale.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-blue-300 to-blue-500"></div>

          {/* Calendly Widget */}
          <div className="flex-1">
            <InlineWidget
              url="https://calendly.com/adnixmedia-info/90-day-booking-boost-consultation?hide_event_type_details=1"
              styles={{
                height: "600px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
