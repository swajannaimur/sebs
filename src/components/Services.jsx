"use client";
import React from "react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "ABA Therapy",
      description:
        "Personalized Applied Behavior Analysis for skill acquisition and behavior reduction.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsqPVUoPODEaLC3GyDMsnRIVSmbY7jJbihjf3eHUImlnyuSrFBJX3gZVP0Gz05m-Fd27qIH5goamiUij319F0QpuRD5z8A4g8o69T4RJauFzfIqM8dwuCDbgP9vT6exh7Wgw6hP_oV-OK0steDxbYZfEgH8eyauidYX8kSnFWWUe4R8hazHd3HHDsO6ArAKCRwe4llp_9WiBf0FcylIpEttmYjiSpfWJSVmhuwGDSz6lazEsJP7Gi7NrKeJ8PQI3QOKKmHyfySz4E",
      alt: "Child stacking colorful blocks during ABA therapy session",
    },
    {
      title: "Social Skills Groups",
      description:
        "Guided group sessions to practice interaction, sharing, and communication.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo93rIrFgwGY_xtOG0p0ucX1w9AZ8kwNreZTQa8ABNcQQcVMLqZyRNvDNsEUD0qpJCv-Y1deVCbka1GiCNFmcPevCTwjk5YDAerpsVcP6S2edB2_mbYtfBFX9OtjmJutGX7bjBvsi2H6NAqyNndQGFukzE9ioYGseydGOFmPLDGPqbtjqC25f56TF-3hdcYXStwfaYRzLDjlmT4yt6uId79QLSaQgtsFiaLZCOsOmUVQgd7ndukhyhy17mefEnfILE5dQI3aRNKB8",
      alt: "Group of diverse children playing together in a circle",
    },
    {
      title: "Parent Coaching",
      description:
        "Empowering parents with tools and strategies for the home environment.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDccy-lSeuFbRpTI6_IFWb0PBJ8Ue3lzQ5QQ-dNDhJ23if0axRYGjUVqDo4x99NnQXvL8Xil9BFDq_xwZBY5sBlBeTcVmZR0_JmIYTChU6vSDphRUtboeFZM7QyVd32KG0nmb-UPIjD_1NSr9E4SDcN2agJU9KdAzWNezARCjIIwTld_lVMH-mswMCKC7cdr73PI0S62ZWh6C_IxvG6MWGK8Nv6SFP4IGOquWwUMWakpzTTka0VEIyU_ZJOBoeBinn6ZLWnCc4WKC8",
      alt: "Parent and therapist discussing notes in a living room setting",
    },
    {
      title: "School Consultation",
      description:
        "Collaborating with educators to support your child's success in the classroom.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByAaJrq351OZZRMGXnlG6lAaAzGHVbOrwBEqnz1_LRoDYvAzURrh1nqtSBi4h9671hVfvAnlvE7f_xh6oCke_1Pzgsv2ctKhlrMwiB-6nkKBYEY9d1DwQoy1AxtD4eoRF9pIqH_HYr1hMaXcjTRwNC9PjRWorMyAKo0qhpTBGIQuGdeJWjgSiBkFtg7qmqq2XwHNSekhHb00JPxCTaMvvwzZwIe6eC_g_ZLlZBBy4BMcrPv_jaCoThGshKoPE6nzm7as64BAxVbiQ",
      alt: "Young girl drawing with crayons at a school desk",
    },
  ];

  return (
    <section
      className="py-28 bg-gradient-to-b from-white via-[#f9f9f9] to-white"
      id="services"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-center mb-20">
          <h2 className="text-black font-bold text-lg uppercase tracking-widest mb-2">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Tailored Programs for Unique Needs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <Link key={index} href="#" className="group">
              <div className="relative bg-white rounded-[2rem] shadow-xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-4 hover:scale-105">
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-t-[2rem] relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-[2rem] pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-base">{service.description}</p>
                </div>

                {/* Accent bar */}
                <div className="absolute top-6 left-6 w-14 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80 animate-pulse"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 flex justify-center md:hidden">
          <button className="w-full max-w-xs px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-2xl hover:opacity-90 transition-all">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
