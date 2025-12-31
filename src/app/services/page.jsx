import AgeGroupsSettings from "@/components/services-components/AgeGroupsSettings";
import Heading from "@/components/services-components/Heading";
import ServicesList from "@/components/services-components/ServicesList";

export default function ServicesPage() {
  return (
    <div>
      <Heading />
      <ServicesList />
      <AgeGroupsSettings/>
    </div>
  );
}
