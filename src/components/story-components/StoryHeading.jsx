export default function StoryHeading() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-primary overflow-hidden text-center">
     
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-20 flex flex-col gap-2">
        <h1 className="text-orange-400 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Our Story
        </h1>

        <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Embrace Your Potential. We are dedicated to providing evidence-based, compassionate behavioral services that respect the unique needs of every family we serve.
        </p>
      </div>
    </section>
  );
}
