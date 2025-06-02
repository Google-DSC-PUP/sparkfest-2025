import RenderedV3Svg2 from "/svgs/RENDERED_V3 2.svg";
import RenderedV3Svg1 from "/svgs/RENDERED_V3 1.svg";
import React from "react";

export function VenueSponsorHeader() {
  return (
    <header className="flex flex-col items-center justify-center">
      {/* For Laptop & Larger Screens */}
      <div className="hidden md:flex flex-row items-center justify-center ">
        <h1 className="header2 text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          GO FORWARD<br />
          <span className="header"><span className="text-yellow">T</span>
            <span className="text-blue">O</span>
            <span className="text-green">G</span>
            <span className="text-red">E</span>
            <span className="text-yellow">T</span>
            <span className="text-blue">H</span>
            <span className="text-green">E</span>
            <span className="text-red">R</span></span>

        </h1>
      </div>

      {/* Small Screen */}
      <div className="flex flex-col items-center justify-center  md:hidden">
        <h1 className="font-mono font-bold text-3xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          GO FORWARD
        </h1>
        <div className="flex justify-center items-center m-[-15px]">
          <span>
          </span>
          <span className="header-2 font-mono font-bold text-3xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)]">
            <span className="text-yellow">T</span>
            <span className="text-blue">O</span>
            <span className="text-green">G</span>
            <span className="text-red">E</span>
            <span className="text-yellow">T</span>
            <span className="text-blue">H</span>
            <span className="text-green">E</span>
            <span className="text-red">R</span>
          </span>
          <span>
          </span>
        </div>
      </div>
    </header>
  );
}
