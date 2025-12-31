"use client";
import React from "react";

export default function OurApproach() {
  return (
    <section
      className="py-20 bg-primary/5 dark:bg-surface-dark border-y border-slate-200 dark:border-slate-800"
      id="approach"
    >
      <div className="max-w-[960px] mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Our Methodology
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          We believe in a holistic, evidence-based approach that centers on the
          family unit. Therapy isn't just about the child; it's about empowering
          the entire support system.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-surface-light dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl">
              psychology
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Evidence-Based
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our interventions are rooted in the latest behavioral science
            research, ensuring effective and measurable outcomes for your child.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-light dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-accent flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl">
              favorite
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Compassionate Care
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We prioritize building trust and emotional safety. Our therapists are
            trained to be warm, patient, and deeply understanding.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-light dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl">groups</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Family-Centered
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Parents are partners. We provide coaching and strategies to help you
            reinforce positive behaviors at home confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
