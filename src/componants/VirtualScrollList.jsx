import React, { useState, useRef } from "react";

const VirtualScrollList = () => {
  const totalItems = 1000;
  const itemHeight = 30;
  const visibleCount = 10; // items visible in viewport
  const containerRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(containerRef.current.scrollTop);
  };

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    totalItems,
    startIndex + visibleCount + 1 // +1 for buffer
  );

  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(`Item #${i + 1}`);
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: visibleCount * itemHeight,
        overflowY: "scroll",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div style={{ height: totalItems * itemHeight, position: "relative" }}>
        {visibleItems.map((item, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: (startIndex + i) * itemHeight,
              height: itemHeight,
              width: "100%",
              padding: "5px",
              borderBottom: "1px solid #eee",
              boxSizing: "border-box",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScrollList;
