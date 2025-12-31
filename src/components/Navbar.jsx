"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const links = (
    <>
      <Link href="/">
        <li className="hover:text-[#F97316] transition-colors duration-500 font-semibold text-slate-900">
          Home
        </li>
      </Link>
      <Link href="/services">
        <li className="hover:text-[#F97316] transition-colors duration-500 font-semibold text-slate-900">
          Services
        </li>
      </Link>
    </>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-light/95  backdrop-blur border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/Logo.png"
                alt="logo"
                height={120}
                width={120}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex justify-center items-center gap-7">{links}</ul>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold shadow-sm duration-500 transition-colors cursor-pointer">
              Get Started
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu size={30} color="black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 mt-4 pt-4 pb-6">
            <div className="">
              <ul className="flex flex-col gap-3">{links}</ul>
              <button className="h-10 px-6 items-center justify-center rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition-colors duration-500 mt-4 w-full cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
