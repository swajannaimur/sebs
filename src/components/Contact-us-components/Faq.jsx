import React from "react";

const faqData = [
  {
    id: 1,
    question: "What services do you provide?",
    answer:
      "We provide child-focused behavioral therapy services designed to support emotional, social, and behavioral development. Our services are individualized and guided by evidence-based practices.",
  },
  {
    id: 2,
    question: "Who do you work with?",
    answer:
      "We work with children and families who are seeking support for behavioral, emotional, or developmental needs, including individuals with autism. Services are tailored to meet each child's unique strengths and goals.",
  },
  {
    id: 3,
    question: "What ages do you serve?",
    answer:
      "We primarily serve children and adolescents. Specific age ranges and service settings may vary depending on individual needs.",
  },
  {
    id: 4,
    question: "How do I get started?",
    answer:
      "Getting started begins with contacting our team. We will discuss your concerns, explain available services, and guide you through next steps, including intake and authorization if needed.",
  },
  {
    id: 5,
    question: "Do you accept insurance?",
    answer:
      "We work with various insurance plans and funding options. Coverage depends on individual policies. Our team can help explain insurance-related questions and verification steps.",
  },
];

const Faq = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-orange-400 text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-[#475569] text-sm sm:text-base">
          We understand that starting therapy can come with many questions.
          Below are answers to some of the most common ones. If you need more
          information, our team is happy to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <details
            key={item.id}
            className="collapse bg-base-100 border border-base-300 "
            open={index === 0}
          >
            <summary className="collapse-title text-[#1E3A8A] font-semibold">
              {item.question}
             
            </summary>

            <div className="collapse-content text-sm">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
