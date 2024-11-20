"use client";

import { InlineWidget } from "react-calendly";
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div className="bg-white text-blue-900 min-h-screen p-4 md:p-8 mt-20">
      <NavBar />
      <header className="text-center mb-8 md:mb-12 mt-12">
        <h1 className="text-3xl md:text-4xl font-bold">Get in Touch with Us</h1>
        <p className="text-lg md:text-xl mt-4">We’d love to hear from you! Contact us for more information about our services or to schedule your free consultation.</p>
      </header>
      <section className="text-center mb-8 md:mb-12">
        <p className="mt-4">Email: <a href="mailto:info@adnixmedia.com" className="text-blue-600">info@adnixmedia.com</a></p>
        <p className="mt-2">Phone: +353 89 217 1490</p>
      </section>
      <div className="flex justify-center">
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl">
          <InlineWidget url="https://calendly.com/adnixmedia-info/90-day-booking-boost-consultation-1?back=1" />
        </div>
        </div>
        <Footer/>
    </div>
  );
}
