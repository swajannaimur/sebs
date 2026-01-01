"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      image: "/images/twoadults.jpg",
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
      id="services"
      className="py-16 bg-linear-to-b from-white via-[#f9f9f9] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1E3A8A] font-bold text-lg uppercase tracking-widest mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Tailored Programs for Unique Needs
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-items-center">
          {services.map((service, index) => (
            <Link key={index} href="#" className="group w-full">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-full sm:w-75 h-96 flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <h4 className="text-2xl font-bold text-[#1E3A8A] group-hover:text-orange-400 transition-colors">
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
