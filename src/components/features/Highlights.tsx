import React from "react";
import SVGComponent from "../ui/SVGComp.tsx";
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
    <div className="flex flex-col flex-wrap gap-4 justify-center">
      <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6">
        <img src={sparkyhead} className="h-15 lg:h-20" />

        <h1 className="mobile-headers text-grey-100 md:hidden">HIGHLIGHTS</h1>

        <h1 className="hidden md:block text-grey-100 header2 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          HIGHLIGHTS
        </h1>

        <img src={sparkyhead} className="scale-x-[-1] h-15 lg:h-20" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 sm:p-6 ">
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
