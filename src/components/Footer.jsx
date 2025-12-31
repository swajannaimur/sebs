import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
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

            <p className="text-slate-500 mt-4 max-w-sm">
              Empowering children and families through compassionate,
              evidence-based behavioral services.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-center items-start">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Follow Us
              </h3>
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

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Newsletter
            </h3>
            <p className="text-slate-500 text-sm mb-4">
              Subscribe to get updates and helpful resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2023 Special Effects Behavioral Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
