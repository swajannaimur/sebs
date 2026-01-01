import React from "react";
import { IoLocation } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

export default function AgeGroupsSettings() {
  return (
    <section className="relative px-6 py-16 lg:px-20 overflow-hidden bg-primary">
      {/* Abstract Background Pattern (same as Hero) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-240 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Age Groups */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg text-orange-500 size-12 bg-orange-100 flex items-center justify-center">
                <GrUserManager className="text-2xl" />
              </div>

              <h3 className="text-orange-500 text-xl font-bold">
                Age Groups Served
              </h3>
            </div>

            <ul className="space-y-3">
              {[
                { label: "Toddlers (2-5):", desc: "Early intervention focus" },
                {
                  label: "School Age (6-12):",
                  desc: "Social & academic support",
                },
                { label: "Teens (13+):", desc: "Independence & life skills" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#475569]"
                >
                  <span className="w-3 h-3 rounded-full bg-orange-400 flex-shrink-0 mt-1"></span>
                  <span className="leading-snug">
                    <strong>{item.label}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4 hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg text-orange-500 size-12 bg-orange-100 flex items-center justify-center">
                <IoLocation className="text-2xl" />
              </div>
              <h3 className="text-orange-500 text-xl font-bold">
                Therapy Settings
              </h3>
            </div>

            <ul className="space-y-3">
              {[
                {
                  label: "In-Clinic:",
                  desc: "Structured learning environment",
                },
                { label: "In-Home:", desc: "Comfort of your own space" },
                { label: "Telehealth:", desc: "Flexible remote options" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#475569]"
                >
                  <span className="w-3 h-3 rounded-full bg-orange-400 flex-shrink-0 mt-1"></span>
                  <span className="leading-snug">
                    <strong>{item.label}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
