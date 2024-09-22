import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Q: What happens during Freshers' Week?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
      question: "Q: What is the transfer application process?",
      answer: "Information about the transfer application process goes here."
    },
    {
        question: "Q: What is the transfer application process?",
        answer: "Information about the transfer application process goes here."
      },
      {
        question: "Q: What is the transfer application process?",
        answer: "Information about the transfer application process goes here."
      },
      {
        question: "Q: What is the transfer application process?",
        answer: "Information about the transfer application process goes here."
      },
      {
        question: "Q: What is the transfer application process?",
        answer: "Information about the transfer application process goes here."
      }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 ">
      {faqs.map((faq, index) => (
        <div key={index} className=" bg-[#f1f1d4]  shadow hover:bg-orange-500 mb-5 ">
          <button 
            onClick={() => toggleFAQ(index)} 
            className="flex items-center w-full p-4 text-left "
          >
            <span className="flex-shrink-0 w-8 h-7 bg-orange-500 text-white flex items-center justify-center  mr-3  ">
              {openIndex === index ? '-' : '+'}
            </span>
            <span className="text-[#333] text-lg tracking-tighter font-semibold ">{faq.question}</span>
          </button>
          {openIndex === index && (
            <div className="mt-2 p-4 bg-white text-gray-700 rounded-b-lg">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
