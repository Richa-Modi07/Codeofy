import React from "react"; 
import { useState } from "react";
import{ChevronDown} from"lucide-react"

function Ans(){
    const faqs = [
  {
    question: "How long does it take to get a response?",
    answer: "Usually within 24 hours our team replies to your email.",
  },
  {
    question: "Do you offer custom pricing for large teams?",
    answer: "Yes, we provide custom pricing for companies with large teams.",
  },
  {
    question: "Can I migrate my existing data to Codeofy?",
    answer: "Yes, our team will help you migrate your existing data easily.",
  },
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
    return(
         <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Quick Answers
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Can't wait for an email? These might help.
        </p>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button className="text-blue-600 font-medium hover:underline">
            View all FAQs →
          </button>
        </div>

      </div>
    </section>
    )
}
export default Ans;