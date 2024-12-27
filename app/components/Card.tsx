

// Card component
import React from 'react';

type CardProps = {
  name: string;
  backgroundImage: string;
  customStyles?: string; // Custom styles for each card
};

export const Card: React.FC<CardProps> = ({ name, backgroundImage, customStyles }) => {
  return (
    <div
      className={`relative grid place-items-start  overflow-hidden rounded-2xl ${customStyles}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 p-4 sm:p-6">
        <p className="mt-2 font-semibold text-lg sm:text-xl md:text-lg lg:text-2xl text-black">{name}</p>
      </div>
    </div>
  );
};
