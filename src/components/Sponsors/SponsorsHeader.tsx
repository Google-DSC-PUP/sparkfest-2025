import RenderedV3Svg2 from "/svgs/RENDERED_V3 2.svg";
import RenderedV3Svg1 from "/svgs/RENDERED_V3 1.svg";
import React from "react";

export function SponsorsHeader() {
  return (
    <header className="flex flex-col items-center justify-center">
      {/* For Laptop & Larger Screens */}
      <div className="hidden md:flex flex-row items-center justify-center ">
        <img src={RenderedV3Svg2} alt="rendered v3" className="size-32" />
        <h1 className="header2 text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          OUR ALLIES IN INNOVATION
        </h1>
        <img src={RenderedV3Svg1} alt="rendered v3" className="size-32" />
      </div>

      {/* Small Screen */}
      <div className="flex flex-col items-center justify-center  md:hidden">
        <h1 className="font-mono font-bold text-3xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          OUR ALLIES IN
        </h1>
        <div className="flex justify-center items-center m-[-15px]">
          <span>
            <img src={RenderedV3Svg2} alt="rendered v3" className="size-20" />
          </span>
          <span className="font-mono font-bold text-3xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)]">
            INNOVATION
          </span>
          <span>
            <img src={RenderedV3Svg1} alt="rendered v3" className="size-20" />
          </span>
        </div>
      </div>
    </header>
  );
}
