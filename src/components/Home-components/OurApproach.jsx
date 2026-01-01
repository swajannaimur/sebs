"use client";
import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";

export default function OurApproach() {
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
        <div className="max-w-240 mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our Methodology
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We believe in a holistic, evidence-based approach that centers on
            the family unit. Therapy isn't just about the child; it's about
            empowering the entire support system.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
            transition-all duration-300 ease-out 
            hover:scale-105 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              className="w-14 h-14 rounded-xl bg-orange-100 text-primary flex items-center justify-center mb-6 
              transition-transform duration-500 hover:rotate-20 hover:scale-110"
            >
              <FaUserAstronaut className="text-3xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
              Evidence-Based
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our interventions are rooted in the latest behavioral science
              research, ensuring effective and measurable outcomes for your
              child.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
            transition-all duration-300 ease-out 
            hover:scale-[1.05] hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              className="w-14 h-14 rounded-xl bg-orange-100 text-accent flex items-center justify-center mb-6 
              transition-transform duration-500 hover:rotate-[20deg] hover:scale-110"
            >
              <LuHeart className="text-3xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
              Compassionate Care
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We prioritize building trust and emotional safety. Our therapists
              are trained to be warm, patient, and deeply understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
            transition-all duration-300 ease-out 
            hover:scale-[1.05] hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              className="w-14 h-14 rounded-xl bg-orange-100 text-purple-600 flex items-center justify-center mb-6 
              transition-transform duration-500 hover:rotate-[20deg] hover:scale-110"
            >
              <MdGroups2 className="text-3xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
              Family-Centered
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Parents are partners. We provide coaching and strategies to help
              you reinforce positive behaviors at home confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
