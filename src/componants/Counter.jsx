import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const incriment = () => {
    setcounter((prev) => prev + 1);
  };

  const decriment = () => {
    setcounter((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div>
      <button
        onClick={() => {
          incriment();
        }}
      >
        incriment
      </button>
      <button
        onClick={() => {
          decriment();
        }}
      >
        decriment
      </button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
