import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});
  const [search, setSearch] = useState(false);

  // Fetch data from API or cache
  const fetchData = async () => {
    if (!input.trim()) {
      setResult([]);
      setSearch(false);
      return;
    }

    if (cache[input]) {
      setResult(cache[input]);
      setSearch(true);
      console.log("catch api is called")
      return;
    }

    try {
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const json = await data.json();
      setResult(json?.recipes || []);
      setCache((prev) => ({ ...prev, [input]: json?.recipes || [] }));
      setSearch(true);
      console.log("api is called")
      console.log(cache)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Debounce input and fetch data on change
  useEffect(() => {
    const timer = setTimeout(fetchData, 400);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <p className="text-xl font-semibold mb-4 text-center">
        Autocomplete Search Bar!!!
      </p>

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setTimeout(() => setShowResult(false), 200)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for recipes..."
        />

        {showResult && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-md">
            {search && result.length === 0 ? (
              <div className="p-2 text-gray-500 text-sm text-center">
                Result not found
              </div>
            ) : (
              result.map((r) => (
                <div
                  key={r.id}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    setInput(r.name);
                    setShowResult(false);
                  }}
                >
                  {r.name}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
