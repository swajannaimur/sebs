import { MdFavorite, MdPsychology, MdHandshake } from "react-icons/md";

const approaches = [
  {
    id: 1,
    icon: MdFavorite,
    title: "Compassion First",
    description:
      "We lead with empathy, understanding that every child and family is unique.",
  },
  {
    id: 2,
    icon: MdPsychology,
    title: "Evidence-Based",
    description:
      "Our methods are grounded in the latest scientific research to ensure effective outcomes.",
  },
  {
    id: 3,
    icon: MdHandshake,
    title: "Collaborative",
    description:
      "We partner closely with parents, schools, and other providers for holistic care.",
  },
];

export default function ApproachSection() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-white">
      <div className="max-w-[960px] mx-auto text-center">
        <h2 className="text-orange-400 text-3xl font-bold leading-tight mb-8">
          Our Care Approach
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {approaches.map((approach) => {
            const Icon = approach.icon;
            return (
              <div
                key={approach.id}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="size-14 rounded-full flex items-center justify-center mb-2 bg-white border-2 border-[#1E3A8A] transition-all duration-300 group-hover:border-[#1E3A8A]">
                  <Icon className="text-3xl text-[#1E3A8A] transition-all duration-500 group-hover:text-orange-400 cursor-pointer" />
                </div>
                <h4 className="text-xl font-bold text-orange-400">
                  {approach.title}
                </h4>
                <p className="text-[#475569] text-sm leading-normal">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
