import ServiceCard from "@/components/services-components/ServiceCard";
import {
  MdExtension,
  MdDiversity3,
  MdHome,
  MdSchool,
  MdRecordVoiceOver,
  MdGroups,
} from "react-icons/md";

export const iconMap = {
  extension: MdExtension,
  diversity_3: MdDiversity3,
  home_health: MdHome,
  school: MdSchool,
  speech: MdRecordVoiceOver,
  community: MdGroups,
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
    icon: "speech",
    title: "Speech Therapy",
    description:
      "Individualized speech and language therapy focused on improving communication, articulation, expressive language, and social communication skills.",
    helps: "Children with speech or language delays",
    goal: "Clear communication & confidence",
  },

  {
    id: 3,
    icon: "community",
    title: "Community Services",
    description:
      "Support that helps individuals apply learned skills in real-world settings such as parks, stores, and community programs.",
    helps: "Children and adolescents in daily environments",
    goal: "Independence & community inclusion",
  },

  {
    id: 4,
    icon: "diversity_3",
    title: "Social Skills Groups",
    description:
      "Structured group sessions that help children practice interaction, turn-taking, and understanding social cues in a safe space.",
    helps: "Children needing peer interaction support",
    goal: "Social fluency & confidence",
  },
  {
    id: 5,
    icon: "home_health",
    title: "Parent Coaching",
    description:
      "Collaborative coaching that equips parents and caregivers with practical, evidence-based strategies to support learning and behavior at home.",
    helps: "Parents, caregivers, and families",
    goal: "Consistency, confidence & family support",
  },
  {
    id: 6,
    icon: "school",
    title: "School Consultation",
    description:
      "Partnership with educators and school teams to support inclusive classrooms and individualized learning success.",
    helps: "Students in educational settings",
    goal: "Academic participation & progress",
  },
];

export default function ServicesList() {
  return (
    <section className="px-6 py-16 lg:px-20 bg-[#F8F7F5]">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
