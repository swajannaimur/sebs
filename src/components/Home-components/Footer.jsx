"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:gap-12 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 md:mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/images/footerLogo.png"
                  alt="logo"
                  height={120}
                  width={120}
                  priority
                />
              </div>
            </Link>

            <p className="text-white mt-4 max-w-sm">
              Empowering children and families through compassionate,
              evidence-based behavioral services.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-center items-start">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-[#F97316] transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-[#F97316] transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-white text-sm mb-4">
              Subscribe to get updates and helpful resources.
            </p>

            <form
              action="https://formsubmit.co/info@specialeffectsbs.com"
              method="POST"
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                fetch(e.currentTarget.action, {
                  method: "POST",
                  body: new FormData(e.currentTarget),
                })
                  .then(() => {
                    alert("Thank you for subscribing! We'll keep you updated.");
                    e.target.reset();
                  })
                  .catch(() => {
                    alert("Something went wrong. Please try again later.");
                  });
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Newsletter Subscription"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <input type="text" name="_honey" style={{ display: "none" }} />

              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for subscribing to our newsletter! We'll keep you updated with our latest services and resources."
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#F97316] hover:bg-orange-600 hover:-translate-y-0.5 cursor-pointer text-white text-sm font-bold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-4 md:pt-8">
          <p className="text-white text-sm text-center">
            © {new Date().getFullYear()} Special Effects Behavioral Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
