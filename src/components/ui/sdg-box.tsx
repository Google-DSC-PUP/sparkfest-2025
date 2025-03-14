import React, { useState } from 'react';

interface SdgBoxProps {
  color: string;
  data: {
    number: number;
    image: string;
    goal: string;
    color: string;
  };
  className?: string;
}

const SdgBox: React.FC<SdgBoxProps> = ({ color, data, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use the color string directly from props instead of trying to use a class
  return (
    <div
      className="w-[140px] h-[140px] border border-white rounded-lg overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-gray-100">
          <span 
            className="absolute top-3 left-3 text-3xl font-bold text-center"
            style={{ color: data.color }} // Use the color from data directly
          >
            {data.number}
          </span>
          <span 
            className="absolute bottom-2 left-3 text-sm font-bold text-center"
            style={{ color: data.color }} // Use the color from data directly
          >
            {data.goal}
          </span>
        </div>
      ) : (
        <div 
          className="flex justify-center items-center w-full h-full"
          style={{ backgroundColor: data.color }} // Use the color from data directly
        >
          <img src={data.image} alt={data.goal} className="w-20 h-20 object-contain" />
        </div>
      )}
    </div>
  );
};

export default SdgBox;