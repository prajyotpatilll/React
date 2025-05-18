import React from "react";
import Tabs from "./Tabs";

const App2 = () => {
  const tabData = [
    { label: "Home", content: <p>Welcome to the homepage.</p> },
    { label: "Profile", content: <p>This is your profile info.</p> },
    { label: "Settings", content: <p>Change your settings here.</p> }
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tabs Example</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App2;
