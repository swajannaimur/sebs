const steps = [
  {
    number: "1",
    title: "Referral",
    description:
      "Receive a referral from your pediatrician or primary care provider for behavioral services.",
  },
  {
    number: "2",
    title: "Benefit Check",
    description:
      "Our team contacts your insurance provider to verify eligibility and coverage details.",
  },
  {
    number: "3",
    title: "Assessment",
    description:
      "A BCBA conducts an initial assessment to create a personalized treatment plan.",
  },
  {
    number: "4",
    title: "Authorization",
    description:
      "We submit the plan for authorization. Once approved, services can begin!",
  },
];

export default function AuthorizationProcess() {
  return (
    <section className="w-full  bg-[#F8F7F5] py-16">
      <div className="max-w-300 mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#1E3A8A] text-3xl font-heading font-bold leading-tight mb-4">
            Authorization Process
          </h2>
          <p className="text-[#111418]/70 text-lg font-body max-w-2xl mx-auto">
            We handle the heavy lifting. Here is the simple path to getting your
            services approved.
          </p>
        </div>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`size-14 rounded-full ${
                    index === 3 ? "bg-[#1E3A8A] border-white text-white" : "bg-orange-100"
                  } text-orange-400 flex items-center justify-center text-xl font-bold shadow-lg hover:border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 border border-orange-400 mb-4 cursor-pointer`}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold font-display text-[#1E3A8A] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
