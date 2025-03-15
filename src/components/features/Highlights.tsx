import React from "react";
import SVGComponent from "../ui/SVGComp";
import sparkyhead from "../../assets/sparkyhead.png";

const cards = [
  {
    title: "Innovation Challenge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-blue-500",
    bdLight: "#57CAFF",
    bdDark: "#446FB8",
    bgMain: "#4285F4",
  },
  {
    title: "Mentorship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-blue-500",
    bdLight: "#5CDB6D",
    bdDark: "#2E7040",
    bgMain: "#34A853",
  },
  {
    title: "Speaker Sessions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-blue-500",
    bdLight: "#FFD427",
    bdDark: "#B28012",
    bgMain: "#F9AB00",
  },
  {
    title: "Networking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "bg-blue-500",
    bdLight: "#FF7DAF",
    bdDark: "#A84038",
    bgMain: "#EA4335",
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-pink-300 h-screen min-h-max justify-center">
      <div className="flex flex-row justify-center items-center gap-6">
        <img src={sparkyhead} className="md:mb-5 h-15 lg:h-20" />
        <p className="text-white font-semibold text-5xl drop-shadow-[0_4px_4px_rgba(168,64,56,1)]  md:font-display lg:text-[70px] ">
          HIGHLIGHTS
        </p>
        <img src={sparkyhead} className="scale-x-[-1] md:mb-5 h-15 lg:h-20" />
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-6 ">
        {cards.map((card, index) => (
          <SVGComponent
            key={index}
            bdLight={card.bdLight}
            bdDark={card.bdDark}
            bgMain={card.bgMain}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
