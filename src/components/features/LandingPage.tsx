import { useState, useEffect } from "react";
import { RetroGrid } from "@/components/magicui/retro-grid";

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
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      <div className="relative z-10 flex w-full flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 gap-4 md:gap-0">
        {/* Left side with mascot */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-64 lg:w-64">
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-500/20 p-4">
              <div className="h-full w-full rounded-full bg-blue-400/30 backdrop-blur-sm">
                {/* Placeholder for mascot */}
                <div className="flex h-full w-full items-center justify-center text-white">
                  <span className="sr-only">Mascot</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with countdown and text */}
        <div className="flex w-full md:w-2/3 flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 text-white">
          {/* Countdown boxes */}
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <div className="flex h-80 px-4 items-center justify-center rounded-[64px] border-2 border-white/70 hover:bg-blue text-[21.056rem] font-mono font-bold backdrop-blur-sm">
              {daysArray[0]}
            </div>
            <div className="flex h-80 px-4 items-center justify-center rounded-[64px] border-2 border-white/70 hover:bg-yellow text-[21.056rem] font-mono font-bold backdrop-blur-sm">
              {daysArray[1]}
            </div>
          </div>

          <div className="text-center text-lg sm:text-xl md:text-2xl title2">
            DAYS TO GO
          </div>

          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl header">
            <span className="text-white">SPARK</span>
            <span className="text-orange-400">F</span>
            <span className="text-blue-400">E</span>
            <span className="text-green-400">S</span>
            <span className="text-red-400">T</span>
            <span className="text-white">:</span>
          </h1>

          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-light header2">
            "Festival of Sparks"
          </h2>
        </div>
      </div>

      <RetroGrid
        angle={75}
        cellSize={80}
        opacity={0.3}
        lightLineColor="rgba(255, 255, 255, 0.3)"
        darkLineColor="rgba(255, 255, 255, 0.3)"
      />
    </div>
  );
}
