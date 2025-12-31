import AgeGroupsSettings from "@/components/services-components/AgeGroupsSettings";
import Heading from "@/components/services-components/Heading";
import ProcessSection from "@/components/services-components/ProcessSection";
import ServicesList from "@/components/services-components/ServicesList";

export default function ServicesPage() {
  return (
    <div>
      <Heading />
      <ServicesList />
      <AgeGroupsSettings/>
      <ProcessSection />
    </div>
  );
}
