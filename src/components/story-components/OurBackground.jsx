import Image from "next/image";
import React from "react";

const OurBackground = () => {
  return (
    <section className="py-20 bg-background-light bg-[#F6F7F8]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/child.png"
                alt="Therapist helping a young child with a puzzle game"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold text-orange-400 leading-tight">
              Our Background
            </h3>
            <p className="text-slate-600  text-lg leading-relaxed">
              Special Effects Behavioral Services was founded on the belief that
              every child deserves the opportunity to reach their full
              potential. Our journey began with a small team of dedicated
              professionals committed to providing individualized care in a warm
              and supportive environment.
            </p>
            <p className="text-slate-600  text-lg leading-relaxed">
              We moved away from rigid, clinical settings to create a space that
              feels like a second home. By focusing on thoughtful, innovative
              approaches, we ensure that therapy is not just a service, but a
              partnership. We listen, we adapt, and we grow alongside the
              families we are privileged to serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBackground;
