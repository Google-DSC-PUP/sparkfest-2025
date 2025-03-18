import React from "react";

interface PixelButtonProps {
  color?: string; // Button background color
  classname?: string; // Button class name
  children: React.ReactNode;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  color = "#4CAF50",
  children,
  classname,
}) => {
  return (
    <button
      className={`relative inline-block p-0 bg-transparent border-none cursor-pointer pixel-corners ${classname} transition duration-200 ease-in-out hover:brightness-90`}
      style={{ fontFamily: "inherit" }}
    >
      {/* Top shadow */}
      <div className="absolute h-[5px] w-full top-0 bg-green-200 opacity-50" />

      {/* Left shadow */}
      <div className="absolute w-[5px] h-full left-0 bg-green-200 opacity-50" />

      {/* Right shadow */}
      <div className="absolute w-[5px] h-full right-0 bg-black opacity-30" />

      {/* Bottom shadow */}
      <div className="absolute h-[5px] w-full bottom-0 bg-black opacity-30" />

      {/* Inner colored box, shifted to show white highlight on top & left */}
      <div
        className="py-1 w-full"
        style={{
          backgroundColor: color,
          boxShadow: "2px 2px 0 #000",
        }}
      >
        {/* Button text */}
        <span className="block px-4 py-2 text-white body2">{children}</span>
      </div>
    </button>
  );
};

export default PixelButton;
