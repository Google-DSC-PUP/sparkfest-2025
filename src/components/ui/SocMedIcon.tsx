import React from "react";

interface SocMedIconProps {
  pathD: string;
  link: string;
}

const SocMedIcon: React.FC<SocMedIconProps> = ({ pathD, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group">
    <button className="shadcn-button">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg hover:shadow-[0px_0px_8px_0px_rgba(255,255,255,1.00)] bg-white active:bg-[#5f6368]"
      >
        <path
          d={pathD}
          fill="#1A3A68"
          className="group-active:fill-[#f1f3f4]"
        />
      </svg>
    </button>
  </a>
);

export default SocMedIcon;
