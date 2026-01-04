"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const pathname = usePathname();
  const menuRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Story", path: "/our-story" },
    { name: "Insurance & Payment", path: "/insurance" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={menuRef}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="logo"
              height={120}
              width={120}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-7">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-[14px] tracking-wide transition duration-300 ${
                      pathname === item.path
                        ? "text-orange-400 font-bold"
                        : "text-slate-900 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex justify-center items-center h-10 px-6 rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition">
              Get Started
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <RxHamburgerMenu size={30} color="black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 mt-4 pt-4 pb-6">
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)} // ✅ closes on navigation
                    className={`block py-2 text-[14px] tracking-wide transition duration-300 ${
                      pathname === item.path
                        ? "text-orange-400 font-bold"
                        : "text-slate-900 hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="h-10 mt-4 w-full rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
