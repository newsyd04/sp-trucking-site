"use client";
import React from "react";
import { motion } from "framer-motion";

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = typeof window !== "undefined" ? window.innerWidth * 1.2 : 1200,
  height = typeof window !== "undefined" ? window.innerHeight * 1.5 : 1500,
  smallWidth = 300,
  duration = 7,
  xOffset = 200,
} = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 w-full h-full"
    >
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-40 pointer-events-none"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(-45deg)`, background: gradientFirst, width: `${width}px`, height: `${height}px` }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: gradientSecond, width: `${smallWidth}px`, height: `${height}px` }}
          className="absolute origin-top-left"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: gradientThird, width: `${smallWidth}px`, height: `${height}px` }}
          className="absolute origin-top-left"
        />
      </motion.div>
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-40 pointer-events-none"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(45deg)`, background: gradientFirst, width: `${width}px`, height: `${height}px` }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: gradientSecond, width: `${smallWidth}px`, height: `${height}px` }}
          className="absolute origin-top-right"
        />
        <div
          style={{ transform: "rotate(45deg) translate(180%, -70%)", background: gradientThird, width: `${smallWidth}px`, height: `${height}px` }}
          className="absolute origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <><div className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="p-4 max-w-7xl mx-auto relative z-50 w-full text-center">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  SP Trucking Inc.
              </h1>
              <p className="mt-4 font-semibold text-md text-neutral-300 max-w-lg mx-auto">
                We deliver on time, every time, <br/>with safety and reliability you can trust.
              </p>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50">
            <a href="#about-section" className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full shadow-lg hover:bg-gray-300 transition">
              <i className="fa-solid fa-arrow-down text-xl"></i>
            </a>
          </div>
      </div>

      {/* About Section */}
      <section id="about-section" className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center px-8">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-4" />
        <div className="py-8 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About Us
          </h2>
          <p className="leading-relaxed mb-6 mt-4 font-semibold text-md text-neutral-300 max-w-lg mx-auto">
            At SP Trucking Inc., we believe in delivering more than just cargo – we deliver trust, safety, and reliability. Founded in [year], our company started with a single truck and a vision: to provide unparalleled transportation services to businesses across the country. Today, with a growing fleet and a dedicated team of drivers and logistics experts, we've become a trusted partner for companies of all sizes.
          </p>
          <p className="leading-relaxed mb-6 mt-4 font-semibold text-md text-neutral-300 max-w-lg mx-auto">
            At SP Trucking Inc., we believe in delivering more than just cargo – we deliver trust, safety, and reliability. Founded in [year], our company started with a single truck and a vision: to provide unparalleled transportation services to businesses across the country. Today, with a growing fleet and a dedicated team of drivers and logistics experts, we've become a trusted partner for companies of all sizes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact-section" className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col items-center justify-center px-8">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 mb-12" />
      <section className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-lg mb-6">
        {/* Title */}
        <header className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg">
            We're here to help. Reach out to us anytime.
          </p>
        </header>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-location-dot text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Address</h3>
              <p className="text-gray-500">
                30 Erickson St Braintree, MA, 02184-1020 United States 
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-envelope text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p>
                <a
                  href="mailto:scoilbhreacchluain@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  sptrucking@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-globe text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Website</h3>
              <p>
                <a
                  href="https://www.scoilbhreacchluain.ie"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sptrucking.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-phone text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Phone</h3>
              <p className="text-gray-500">+353 (0) 82-2345838</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-sbc-blue rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fa-solid fa-mobile text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Mobile</h3>
              <p className="text-gray-500">+353 (0) 82-2345838</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
