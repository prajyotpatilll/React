import React, { useState, useEffect } from 'react';

const DebounceSearch = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setResults(filteredData);
    }, 500);

    // ❗️ Fix: Remove space in arrow function after '='
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-1 mb-3"
        placeholder="Search..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceSearch;
