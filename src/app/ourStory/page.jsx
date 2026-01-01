import CallToAction from "@/components/services-components/CallToAction";
import CoreValues from "@/components/story-components/CoreValues";
import Mission from "@/components/story-components/Mission";
import OurBackground from "@/components/story-components/OurBackground";
import StoryHeading from "@/components/story-components/StoryHeading";
import React from "react";

const page = () => {
  return (
    <div>
      <StoryHeading />
      <OurBackground />
      <Mission />
      <CoreValues />
      <CallToAction />
    </div>
  );
};

export default page;
