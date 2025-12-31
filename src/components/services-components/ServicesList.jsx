import ServiceCard from "@/components/services-components/ServiceCard";
import {
  MdExtension,
  MdDiversity3,
  MdHome,
  MdSchool,
} from "react-icons/md"; // <-- replaced MdHomeHealth with MdHome

/* Icon map */
export const iconMap = {
  extension: MdExtension,
  diversity_3: MdDiversity3,
  home_health: MdHome, // <-- updated
  school: MdSchool,
};

const services = [
  {
    id: 1,
    icon: "extension",
    title: "ABA Therapy",
    description:
      "Data-driven behavioral interventions tailored to individual needs. We focus on positive reinforcement to build meaningful skills.",
    helps: "Children with autism spectrum disorder",
    goal: "Build independence & reduce barriers",
  },
  {
    id: 2,
    icon: "diversity_3",
    title: "Social Skills Groups",
    description:
      "Structured group sessions that help children practice interaction, turn-taking, and understanding social cues in a safe space.",
    helps: "Children needing peer interaction support",
    goal: "Social fluency & confidence",
  },
  {
    id: 3,
    icon: "home_health",
    title: "Parent Coaching",
    description:
      "We empower parents and caregivers with practical strategies to support their child's development consistently at home.",
    helps: "Parents, caregivers, and siblings",
    goal: "Consistent home support & family harmony",
  },
  {
    id: 4,
    icon: "school",
    title: "School Consultation",
    description:
      "Collaborative support for educators to create inclusive learning environments that cater to your child's specific learning profile.",
    helps: "Students in classroom settings",
    goal: "Academic integration & success",
  },
];

export default function ServicesList() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
