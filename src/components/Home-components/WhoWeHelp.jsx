import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const WhoWeHelp = () => {
  return (
    <section className="py-20 bg-background-light bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-4/3 shadow-xl">
              {/* Alt: Therapist helping a young child with a puzzle game */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('./images/speech.avif')",
                }}
              ></div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 space-y-6">
            <h2 className=" text-[#1E3A8A]  font-bold text-lg uppercase tracking-wide">Who We Help</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-orange-400 leading-tight">
              Supporting Every Step of Growth
            </h3>
            <p className="text-slate-600  text-lg leading-relaxed">
              We specialize in helping children and families navigate behavioral challenges, anxiety, and developmental
              milestones. Our goal is to create a supportive environment for every unique journey, focusing on:
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-center  gap-3">
                <span className="material-symbols-outlined text-primary mt-1">⚡️</span>
                <span className="text-slate-700">Autism Spectrum Disorder (ASD) support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary mt-1">⚡️</span>
                <span className="text-slate-700 ">Social skills and communication development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary mt-1">⚡️</span>
                <span className="text-slate-700 ">Behavioral challenges at home or school</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                className="text-orange-400 hover:text-orange-600 font-bold flex items-center gap-2 group"
                href="#"
              >
                Find out if we're a good fit
                <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1">
                  <LiaLongArrowAltRightSolid />

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
