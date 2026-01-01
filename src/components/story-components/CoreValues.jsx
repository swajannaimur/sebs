"use client";

import {
  FaHandshake,
  FaFingerprint,
  FaUsers,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

const values = [
  {
    icon: FaHandshake,
    title: "Respect",
    description:
      "We honor the dignity and unique perspective of every individual, listening with intent and caring without judgment.",
  },
  {
    icon: FaFingerprint,
    title: "Individualization",
    description:
      "No two journeys are alike. We tailor our strategies to fit the specific needs, strengths, and goals of each child.",
  },
  {
    icon: FaUsers,
    title: "Inclusion",
    description:
      "We champion environments where everyone belongs, advocating for acceptance and participation in the wider community.",
  },
  {
    icon: FaUserFriends,
    title: "Partnership",
    description:
      "Therapy is a team effort. We collaborate closely with parents, schools, and other professionals to ensure consistency.",
  },
  {
    icon: FaCheckCircle,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, adhering to the highest ethical standards in behavioral analysis.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
            Core Values
          </h2>
          <p className="text-[#111418]/70">
            The five pillars that guide every interaction and decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`bg-white p-8 rounded-2xl border border-slate-200 hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 
                  ${
                    index === 3
                      ? "lg:col-start-1 lg:translate-x-1/2"
                      : index === 4
                      ? "lg:col-start-2 lg:translate-x-1/2"
                      : ""
                  }
                `}
              >
                <div className="size-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-6">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-[#1E3A8A] text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-[#111418]/70">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
