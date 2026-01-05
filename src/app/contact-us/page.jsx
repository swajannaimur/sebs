import ContactHeading from "@/components/Contact-us-components/ContactHeading";
import ContactSection from "@/components/Contact-us-components/ContactSection";
import Faq from "@/components/Contact-us-components/Faq";

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
