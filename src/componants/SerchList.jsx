import React, { useState } from "react"; // ✅ Import useState

const SerchList = () => {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
  ];

  const [search, setSearch] = useState(""); 

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border mb-4"
      />
      <ul>
        {items
          .filter((item) =>
            item.toLowerCase().includes(search.toLowerCase()) 
          )
          .map((item, index) => (
            <li key={index} className="border p-2 mb-1 rounded">
              {item}
            </li> 
          ))}
      </ul>
    </div>
  );
};

export default SerchList;
