import ContactHeading from "@/components/contact-us-components/ContactHeading";
import ContactSection from "@/components/contact-us-components/ContactSection";
import Faq from "@/components/contact-us-components/Faq";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHeading />
      <Faq />
      <ContactSection />
    </div>
  );
};

export default page;
