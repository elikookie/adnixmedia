"use client";

import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <div className="bg-white text-blue-900 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get in Touch with Us</h1>
        <p className="text-xl mt-4">We’d love to hear from you! Contact us for more information about our services or to schedule your free consultation.</p>
      </header>
      <section className="text-center">
        <p className="mt-4">Email: <a href="mailto:info@adnixmedia.com" className="text-blue-600">info@adnixmedia.com</a></p>
        <p className="mt-2">Phone: +353 89 217 1490</p>
      </section>

      <InlineWidget url="https://calendly.com/adnixmedia-info/90-day-booking-boost-consultation-1?back=1" />

    </div>
  );
}