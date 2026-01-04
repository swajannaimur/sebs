import React from "react";

const Faq = () => {
  return (
    <div className="max-w-7xl py-20 mx-auto">
      <div className="text-center max-w-2xl mx-auto px-2">
        <h2 className="text-[#1E3A8A] text-2xl sm:text-3xl font-extrabold leading-tight mb-3 sm:mb-4">
          How Our Services Work
        </h2>
        <p className="text-[#475569] text-sm sm:text-base">
          We make the process simple and transparent so you can focus on what
          matters most: your child.
        </p>
      </div>
      <div className="">
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold">
            How do I create an account?
          </summary>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </summary>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </details>
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold">
            How do I update my profile information?
          </summary>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Faq;
