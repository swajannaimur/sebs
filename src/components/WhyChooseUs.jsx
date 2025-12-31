"use client";
import React from "react";
import { MdVerifiedUser, MdEditNote, MdHealthAndSafety } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      {/* Abstract Background Pattern (Hero section style) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white"></path>
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 md:px-10 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-white font-bold text-lg uppercase tracking-wide mb-2">Why Choose Us</h2>
            <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-6">
              A Partner in Your Family's Journey
            </h3>
            <p className="text-white/80 text-lg mb-8">
              We know that choosing a therapy provider is a big decision. At Special Effects, we combine clinical
              excellence with a heart for service.
            </p>

            <div className="space-y-6">
              {/* Certified Experts */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                  <MdVerifiedUser />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Certified Experts</h4>
                  <p className="text-white/80 mt-1">
                    Our team consists of Board Certified Behavior Analysts (BCBAs) and Registered Behavior Technicians (RBTs).
                  </p>
                </div>
              </div>

              {/* Individualized Plans */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                  <MdEditNote />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Individualized Plans</h4>
                  <p className="text-white/80 mt-1">
                    No two children are alike. We create custom treatment plans tailored specifically to your child's strengths and needs.
                  </p>
                </div>
              </div>

              {/* Flexible Settings */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                  <MdHealthAndSafety />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Flexible Settings</h4>
                  <p className="text-white/80 mt-1">
                    We offer therapy in your home, at our center, or in community settings depending on what works best for learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-white/10 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl transform   backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Ready to start the journey?</h3>
              <p className="text-white/80 mb-8">
                Schedule a free 15-minute consultation to discuss your child's needs and how we can help.
              </p>
              <form className="space-y-4 text-left">
                <div>
                  <label className="text-sm font-semibold text-white ml-1">Parent's Name</label>
                  <input
                    className="w-full mt-1 px-4 py-3 rounded-lg border-0 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:bg-white/30 transition-all"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-white ml-1">Email Address</label>
                  <input
                    className="w-full mt-1 px-4 py-3 rounded-lg border-0 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:bg-white/30 transition-all"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <button
                  className="w-full py-3 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg mt-2 transition-colors"
                  type="button"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
