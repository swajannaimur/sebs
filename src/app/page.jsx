import Hero from "@/components/Home-components/Hero";
import OurApproach from "@/components/Home-components/OurApproach";
import Services from "@/components/Home-components/Services";
import WhoWeHelp from "@/components/Home-components/WhoWeHelp";
import WhyChooseUs from "@/components/Home-components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <WhoWeHelp />
      <OurApproach />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default page;
