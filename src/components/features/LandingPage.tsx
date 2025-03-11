import { useState, useEffect } from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { NumberTicker } from "@/components/magicui/number-ticker";
import SparkyImage from "@/assets/sparky-image.png";

export default function LandingPage() {
  const targetDate = new Date("2025-04-10");
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const today = new Date();
      const timeDifference = targetDate - today;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysRemaining(days);
    };

    calculateDaysRemaining();
    const interval = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24); // Update every day
    return () => clearInterval(interval);
  }, [targetDate]);

  const daysArray = String(daysRemaining).padStart(2, "0").split("");

  return (
    <div className="relative flex w-full flex-col md:flex-row items-center justify-center lg:justify-around min-h-screen">
      {/* Left side with mascot */}
      <div className="w-fit flex justify-center md:justify-start z-10">
        <img src={SparkyImage} className=" " />
      </div>

      {/* Right side with countdown and text */}
      <div className="flex w-full flex-col items-start gap-2 text-white z-10">
        {/* Countdown boxes with NumberTicker */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-4 cursor-pointer ">
            <div className="flex h-40 sm:h-60 md:h-80 px-4 items-center justify-center rounded-[64px] border-2 border-white/70 hover:bg-blue text-6xl sm:text-8xl md:text-[21.056rem] font-mono font-bold backdrop-blur-sm ">
              <NumberTicker
                className="text-white"
                value={parseInt(daysArray[0])}
              />
            </div>
            <div className="flex h-40 sm:h-60 md:h-80 px-4 items-center justify-center rounded-[64px] border-2 border-white/70 hover:bg-yellow text-6xl sm:text-8xl md:text-[21.056rem] font-mono font-bold backdrop-blur-sm">
              <NumberTicker
                className="text-white"
                value={parseInt(daysArray[1])}
              />
            </div>
          </div>
          <div className="text-center text-lg sm:text-xl md:text-2xl title2">
            DAYS TO GO
          </div>
        </div>

        <h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-7xl header [text-shadow:0px_4.56px_4.56px_#A84038]">
          <span className="text-white">SPARK</span>
          <span className="text-orange-400">F</span>
          <span className="text-blue-400">E</span>
          <span className="text-green-400">S</span>
          <span className="text-red-400">T</span>
          <span className="text-white">:</span>
        </h1>

        <h2 className="text-center text-lg sm:text-xl md:text-3xl header2">
          “Festival of Sparks”
        </h2>
      </div>

      <RetroGrid
        angle={75}
        cellSize={40}
        opacity={0.1}
        lightLineColor="rgba(241, 243, 244, 0.64)"
        darkLineColor="rgba(241, 243, 244, 0.64)"
        lineThickness={2}
      />
    </div>
  );
}
