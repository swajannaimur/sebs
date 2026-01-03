import FundingCard from "./FundingCard";

import { FaMoneyBills } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";

export const iconMap = {
  money: FaMoneyBills,
  school: IoMdSchool,
  hand: FaHandHoldingHeart,
  card: IoMdCard,
};

const services = [
  {
    id: 1,
    icon: "money",
    title: "Private Pay",
    description:
      "Flexible payment plans for families who prefer to pay out-of-pocket or do not have qualifying insurance coverage. We offer transparent pricing structures.",
  },
  {
    id: 2,
    icon: "school",
    title: "School District Funding",
    description:
      "We partner with local school districts to provide IEEs and school-based services. Check if your child qualifies for district-funded support.",
  },

  {
    id: 3,
    icon: "hand",
    title: "State Grants & Aid",
    description:
      "Our team can help guide you towards state-specific grants and disability aid programs that can offset the cost of therapy services.",
  },

  {
    id: 4,
    icon: "card",
    title: "HSA & FSA",
    description:
      "We accept Health Savings Account (HSA) and Flexible Spending Account (FSA) cards for all eligible therapy services.",
  },
];

export default function FundingLIst() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-white">
      <div className="text-center max-w-2xl mx-auto px-2 mb-10">
        <h2 className="text-[#1E3A8A] text-2xl sm:text-3xl font-extrabold leading-tight mb-3 sm:mb-4">
          Funding and Payment Options
        </h2>
      </div>
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <FundingCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
