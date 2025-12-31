import React from "react";

export default function CallToAction() {
  return (
    <section className="relative px-6 py-20 lg:px-20 overflow-hidden bg-primary">
      {/* Abstract Background Pattern (same as Hero) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-orange-400 text-3xl md:text-4xl font-bold leading-tight">
          Ready to see your child thrive?
        </h2>

        <p className="text-blue-100 text-lg max-w-xl">
          Take the first step towards a brighter future. Schedule a consultation with our caring team today to discuss your child's needs.
        </p>

        <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-orange-400 text-white text-lg font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
