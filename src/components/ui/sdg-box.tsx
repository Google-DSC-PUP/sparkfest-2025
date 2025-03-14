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

  return (
    <div
      className={`w-[140px] h-[140px] border border-white rounded-lg overflow-hidden ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        {/* Colored background with icon */}
        <div 
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundColor: data.color }} 
        >
          <img src={data.image} alt={data.goal} className="w-20 h-20 object-contain" />
        </div>
        
        {/* White background with text (shown on hover) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <span 
            className="absolute top-3 left-3 text-[1.5rem] font-mono font-bold text-center"
            style={{ color: data.color }} 
          >
            {data.number}
          </span>
          <span 
            className="absolute bottom-2 left-3 text-[13.136px] font-mono font-bold"
            style={{ color: data.color }} 
          >
            {data.goal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SdgBox;