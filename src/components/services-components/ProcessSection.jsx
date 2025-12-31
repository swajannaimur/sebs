import { MdAssignment, MdPsychology, MdVerified } from "react-icons/md";

const iconMap = {
  assignment: MdAssignment,
  psychology_alt: MdPsychology,
  verified: MdVerified,
};

const steps = [
  {
    id: 1,
    title: "Initial Intake",
    description:
      "We start with a friendly conversation to understand your family's needs, concerns, and goals.",
    icon: "assignment",
    align: "left",
  },
  {
    id: 2,
    title: "Comprehensive Assessment",
    description:
      "Our specialists conduct a thorough, play-based assessment to identify strengths and areas for growth.",
    icon: "psychology_alt",
    align: "right",
  },
  {
    id: 3,
    title: "Personalized Plan",
    description:
      "We develop a custom therapy plan and schedule designed specifically for your child's unique journey.",
    icon: "verified",
    align: "left",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-white">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[#1E3A8A] text-3xl font-extrabold leading-tight mb-4">
            How Our Services Work
          </h2>
          <p className="text-[#475569]">
            We make the process simple and transparent so you can focus on what
            matters most: your child.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-100 md:left-1/2 md:-ml-0.5 hidden md:block"></div>

          {steps.map((step, index) => {
            const StepIcon = iconMap[step.icon];
            const isActive = index === 0; // first step is active

            return (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center mb-12 ${
                  step.id === steps.length ? "mb-0" : ""
                } group`}
              >
                {step.align === "left" ? (
                  <>
                    {/* Left Content */}
                    <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-xl font-bold text-[#1E3A8A]">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-[#475569] mt-2">{step.description}</p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex items-center justify-center size-12 rounded-full shadow-lg shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#1E3A8A] text-white border-2 border-[#1E3A8A]"
                          : "bg-white text-orange-400 border-2 border-orange-400 group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                      }`}
                    >
                      {StepIcon && <StepIcon className="text-2xl" />}
                    </div>

                    <div className="flex-1 md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:pr-12 hidden md:block"></div>

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex items-center justify-center size-12 rounded-full shadow-lg shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#1E3A8A] text-white border-2 border-[#1E3A8A]"
                          : "bg-white text-orange-400 border-2 border-orange-400 group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]"
                      }`}
                    >
                      {StepIcon && <StepIcon className="text-2xl" />}
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 md:pl-12">
                      <h3 className="text-xl font-bold text-[#1E3A8A]">
                        {step.id}. {step.title}
                      </h3>
                      <p className="text-[#475569] mt-2">{step.description}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
