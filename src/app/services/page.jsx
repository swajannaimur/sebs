import AgeGroupsSettings from "@/components/services-components/AgeGroupsSettings";
import CallToAction from "@/components/services-components/CallToAction";
import ApproachSection from "@/components/services-components/ApproachSection";
import Heading from "@/components/services-components/Heading";
import ProcessSection from "@/components/services-components/ProcessSection";
import ServicesList from "@/components/services-components/ServicesList";

export default function ServicesPage() {
  return (
    <div>
      <Heading />
      <ServicesList />
      <ProcessSection />
      <AgeGroupsSettings />
      <ApproachSection />
      <CallToAction />
    </div>
  );
}
