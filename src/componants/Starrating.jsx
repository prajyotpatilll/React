import React, { useState } from "react";

const Starrating = () => {
  const [rating, setRating] = useState(0);       // Final rating
  const [hover, setHover] = useState(0);         // Temporary hover

  return (
    <div className="flex gap-2 text-3xl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            cursor: "pointer",
            color: star <= (hover || rating) ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Starrating;
