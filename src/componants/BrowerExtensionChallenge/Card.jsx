import React, { useEffect, useState } from "react";

const Card = ({ data }) => {
  const [items, setItems] = useState(data);

  const setActive = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, isActive: !item.isActive } // toggle
          : item
      )
    );
  };
  



  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              {item.name[0]}
            </div>
            <div>
              <div className="text-lg font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
              Remove
            </button>
            <input
              type="radio"
              className="form-radio text-blue-600"
              name="activeItem"
              checked={item.isActive}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
