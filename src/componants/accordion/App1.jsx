import React from "react";
import Accordion from "./Accordion";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is a component?",
    answer: "Components are reusable pieces of UI in React."
  },
  {
    question: "What is state?",
    answer: "State is a built-in object that stores property values that belong to a component."
  }
];

const App1 = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">FAQ</h1>
      <Accordion data={faqData} />
    </div>
  );
};

export default App1;
