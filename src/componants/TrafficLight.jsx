import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [activelight, setactivelight] = useState("red");

  useEffect(() => {
    const intervel = setInterval(() => {
      setactivelight((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        return "red";
      });
    }, 1000);
    return () => clearInterval(intervel);
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4 mt-10 bg-black p-5 rounded-2xl">
      <div
        className={`w-20 h-20 rounded-full ${
          activelight === "red" ? "bg-red-500" : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-20 h-20 rounded-full ${
         activelight === "yellow" ? "bg-yellow-500" : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-20 h-20 rounded-full ${
          activelight === "green" ? "bg-green-500" : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default TrafficLight;
