import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";

const Mission = () => {
  return (
    <section
      className="relative bg-primary overflow-hidden border-y border-slate-200"
      id="approach"
    >
      {/* Hero Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white"></path>
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
                   transition-all duration-300 ease-out 
                   hover:scale-[1.05] hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              className="w-14 h-14 rounded-xl bg-orange-100 text-accent flex items-center justify-center mb-6 
                     transition-transform duration-500 hover:rotate-[20deg] hover:scale-110"
            >
              <LuHeart className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to create and deliver thoughtful, innovative
              approaches that foster meaningful
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
                   transition-all duration-300 ease-out 
                   hover:scale-[1.05] hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 
                     transition-transform duration-500 hover:rotate-[20deg] hover:scale-110"
            >
              <MdGroups2 className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We aim to shape an inclusive future where individuals with autism
              are supported through practices that thoughtfully blend scientific
              rigor with creativity, and evidence-based methods with empathy and
              understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
