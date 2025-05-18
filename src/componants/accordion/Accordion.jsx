import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-2">
      {data.map((item, index) => (
        <div key={index} className="border rounded shadow">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-2 font-semibold bg-gray-200"
          >
            {item.question}
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 bg-white">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
