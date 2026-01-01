"use client";
import React from "react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "ABA Therapy",
      description:
        "Personalized Applied Behavior Analysis for skill acquisition and behavior reduction.",
      image: "/images/ABA.jpg",
      alt: "Child stacking colorful blocks during ABA therapy session",
    },
    {
      title: "Social Skills Groups",
      description:
        "Guided group sessions to practice interaction, sharing, and communication.",
      image: "/images/social.jpg",
      alt: "Group of diverse children playing together in a circle",
    },
    {
      title: "Parent Coaching",
      description:
        "Empowering parents with tools and strategies for the home environment.",
      image: "/images/teacher.jpg",
      alt: "Parent and therapist discussing notes in a living room setting",
    },
    {
      title: "School Consultation",
      description:
        "Collaborating with educators to support your child's success in the classroom.",
      image: "/images/School.jpg",
      alt: "Young girl drawing with crayons at a school desk",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white via-[#f9f9f9] to-white"
      id="services"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-black font-bold text-lg uppercase tracking-widest mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Tailored Programs for Unique Needs
          </h3>
        </div>

        {/* Services Grid: 4 cards per row on large screens, with gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {services.map((service, index) => (
            <Link key={index} href="#" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-[300px] h-[420px] flex flex-col">
                {/* Image */}
                <div className="h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
