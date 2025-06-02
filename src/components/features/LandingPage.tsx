import { useState, useEffect } from "react";
import { RetroGrid } from "@/components/magicui/retro-grid.tsx";
import { NumberTicker } from "@/components/magicui/number-ticker.tsx";
import SparkyImage from "@/assets/sparky-image.png";
import LandingPageImage from "@/assets/landing-page-image.png";
import React from "react";

export default function LandingPage() {
  const targetDate = new Date("2025-05-31");
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const today = new Date();
      const timeDifference = targetDate.getTime() - today.getTime();
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);
    };

    calculateDaysRemaining();
    const interval = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24); // Update every day
    return () => clearInterval(interval);
  }, [targetDate]);

  const daysArray = String(daysRemaining).padStart(2, "0").split("");

  return (
    <div
      className="relative flex w-full p-4 flex-col-reverse lg:flex-row items-center justify-center gap-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${LandingPageImage})` }}
    >
      {/* Left side with mascot - 50% width */}
      <div className="w-full xl:w-1/2 flex justify-center z-10 md:mt-20">
        <img
          src={SparkyImage}
          alt="sparky image"
          className="w-[80%] max-w-[400px] md:max-w-[500px] lg:w-full"
        />
      </div>

      {/* Right side with countdown and text - 50% width */}
      <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start gap-2 text-white z-10 mt-20">
        {/* Countdown boxes with NumberTicker */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <div
              className="flex px-4 items-center justify-center rounded-[40px] lg:rounded-[64px] border-2 border-white/70 hover:bg-blue 
  text-[12rem] sm:text-[14rem] md:text-[16rem] lg:text-[18rem] xl:text-[21.056rem] font-mono font-bold leading-none backdrop-blur-sm"
            >
              <NumberTicker
                className="text-white"
                value={0}
              />
            </div>

            <div
              className="flex px-4 items-center justify-center rounded-[40px] lg:rounded-[64px] border-2 border-white/70 hover:bg-yellow 
  text-[12rem] sm:text-[14rem] md:text-[16rem] lg:text-[18rem] xl:text-[21.056rem] font-mono font-bold leading-none backdrop-blur-sm"
            >
              <NumberTicker
                className="text-white"
                value={0}
              />
            </div>
          </div>
          <div className="title2">DAYS TO GO</div>
        </div>

        <h1 className="header [text-shadow:0px_4.56px_4.56px_#A84038]">
          <span className="text-white">SPARK</span>
          <span className="text-yellow">F</span>
          <span className="text-blue">E</span>
          <span className="text-green">S</span>
          <span className="text-red">T</span>
          <span className="text-white">:</span>
        </h1>

        <h2 className="header2">“Festival of Sparks”</h2>
      </div>

      <RetroGrid
        angle={75}
        cellSize={35}
        opacity={0.1}
        lightLineColor="rgba(241, 243, 244, 0.64)"
        darkLineColor="rgba(241, 243, 244, 0.64)"
        lineThickness={2}
      />
    </div>
  );
}
