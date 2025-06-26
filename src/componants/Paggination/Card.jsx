import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-64 hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt="image not found"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
      </div>
    </div>
  );
};

export default Card;

