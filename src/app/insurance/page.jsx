import AuthorizationProcess from "@/components/insurance-components/AuthorizationProcess";
import Funding from "@/components/insurance-components/FundingList";
import InsuranceCTA from "@/components/insurance-components/InsuranceCTA";
import InsruranceHeading from "@/components/insurance-components/InsuranceHeading";
import UnderstandingComponents from "@/components/insurance-components/UnderstandingComponents";
import React from "react";

const page = () => {
  return (
    <div>
      <InsruranceHeading />
      <UnderstandingComponents />
      <Funding />
      <AuthorizationProcess/>
      <InsuranceCTA/>
    </div>
  );
};

export default page;
