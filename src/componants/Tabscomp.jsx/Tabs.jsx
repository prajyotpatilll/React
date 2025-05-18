import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Tab Labels */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeIndex === index
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border rounded-b shadow">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
