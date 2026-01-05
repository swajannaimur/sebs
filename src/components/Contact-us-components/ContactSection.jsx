"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    title: "Phone",
    description: "Mon–Fri, 8am–6pm",
    value: "(555) 123-4567",
    icon: FaPhoneAlt,
    href: "tel:+15551234567",
  },
  {
    id: 2,
    title: "Email",
    description: "Our team is happy to help",
    value: "hello@specialeffects.com",
    icon: FaEnvelope,
    href: "mailto:hello@specialeffects.com",
  },
  {
    id: 3,
    title: "Office",
    description: "Visit our location",
    value: "123 Therapy Lane, Suite 100, Springfield, IL 62704",
    icon: FaMapMarkerAlt,
  },
];

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-2">Send us a message</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6">Please fill out the form below. Your information is kept confidential.</p>

          <form
            action="https://formsubmit.co/swajanwp@gmail.com"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              fetch(e.target.action, {
                method: "POST",
                body: new FormData(e.target),
              }).then(() => {
                alert("Form submitted successfully!");
                setTimeout(() => {
                  window.location.href = "/";
                }, 2000);
              });
            }}
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Submission - Special Effects" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                required
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm  focus:outline-none focus:border-orange-400 focus:border-2"
              />
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                required
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:border-2"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:border-2"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:border-2"
              />
            </div>

            <select
              name="inquiry"
              required
              className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:border-2"
            >
              <option value="">How can we help?</option>
              <option>ABA Therapy</option>
              <option>Assessment</option>
              <option>Insurance Question</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full rounded-lg border-2 border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:border-2 resize-none"
            />

            <button
              type="submit"
              className="flex min-w-50 cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-orange-400 hover:bg-orange-500 text-white text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-6">Other ways to reach us</h3>

            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-orange-400">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.description}</p>

                      {item.href ? (
                        <a href={item.href} className="text-[#1E3A8A] font-medium hover:underline text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
