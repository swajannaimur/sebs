import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full py-16 md:py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white"></path>
        </svg>
      </div>

      <div className="layout-container relative z-10 px-4 md:px-10 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
            <span className="size-2 rounded-full bg-accent"></span>
            Welcoming New Families
          </div>

          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Embrace Your <span className="text-orange-400">Potential</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Compassionate behavioral therapy empowering children and families to thrive. We create a supportive
            environment for every unique journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="h-12 px-8 rounded-lg bg-accent hover:bg-orange-600 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Get Started
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base backdrop-blur-sm transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[600px]">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
            {/* Alt text moved to comment to avoid invalid attribute */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0ocBVonDyHFmhkrttrIzGB98plepBxON2wMrvFj0OJ8ahAGfDSRcKzAAZG6kuiLRvjPZWKX-xikvw3pgPROQbudKRlleJk9T9d293NOR8EzRDmfM68uniBvlB8OwK4CPGNZAecAyrh5LBP9bod0B623G8b_FJ42M4e5ho6q0piQgmOFuKp3DXZlh7BRHYawkhBosRu4q_1bzaWwh9ONFde_87GwzD5c52SxATk9_HCSmbUeDUeWL-w9JT8JnA4JNvtSavLvQdKD4')",
              }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">sentiment_very_satisfied</span>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">98% Parent Satisfaction</p>
                  <p className="text-slate-500 text-xs">Based on recent family feedback surveys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
