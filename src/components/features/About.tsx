import React from "react";
import { SDGData } from "@/data/dataLoader";
import sparkyLogo from "/images/rendered_v3.png";
import SdgBox from "../ui/sdg-box";
import SDGsGrid from "../ui/sdg-grid";

const About = () => {
  return (
    <section className="flex flex-col justify-center sm:block md:block relative h-full xl:h-[940px] w-full ">
      <div className="max-w-[2000px] mx-auto relative">
        {/* Headers - Desktop */}
        <div className="hidden xl:block mt-9">
          {/* SparkFest */}
          <div className="pl-13">
            <div className="flex items-center">
              <img src={sparkyLogo} alt="" className="w-32 h-32 scale-x-[-1]" />
              <h1 className="header2 text-grey-100" style={{textShadow: "0px 4px 4px #A84038"}}>
                SPARK
                <span className="text-yellow">F</span>
                <span className='text-blue'>E</span>
                <span className='text-green'>S</span>
                <span className='text-red'>T</span>
              </h1>
              <img src={sparkyLogo} alt="" className="w-32 h-32" />
            </div>
            <p className="text-white body1 w-[1160px] pl-7">A 1-week hackathon that is designed to bring together students to tackle real-world challenges with innovative tech solutions. </p>
          </div>

          {/* Prompt */}
          <div className="text-grey-100 pl-20 mt-10">
            <h1 className="title2">SUSTAINABLE DEVELOPMENT GOALS</h1>
            <p className="w-[760px] body1">
              The hackathon aims to address challenges by developing innovative solutions aligned with the Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>

        {/* SDG - Desktop */}
        <div className="hidden xl:block absolute right-0 top-60 w-[1160px] h-[650px]">
          <div className="flex justify-end pr-20">
            <SDGsGrid rowConfig={[2, 3, 5, 7]} sdgData={SDGData} />
          </div>
        </div>
        
        {/* Headers - Tablet */}
        <div className="hidden md:block xl:hidden mt-9 px-6">
          {/* SparkFest */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <img src={sparkyLogo} alt="" className="w-24 h-24 scale-x-[-1]" />
              <h1 className="header2 text-grey-100" style={{textShadow: "0px 4px 4px #A84038"}}>
                SPARK
                <span className="text-yellow">F</span>
                <span className='text-blue'>E</span>
                <span className='text-green'>S</span>
                <span className='text-red'>T</span>
              </h1>
              <img src={sparkyLogo} alt="" className="w-24 h-24" />
            </div>
            <p className="text-white body2 text-center mt-4 px-8">A 1-week hackathon that is designed to bring together students to tackle real-world challenges with innovative tech solutions. </p>
          </div>

          {/* Prompt */}
          <div className="text-grey-100 mt-8 text-center">
            <h1 className="title2">SUSTAINABLE DEVELOPMENT GOALS</h1>
            <p className="body2 mx-auto max-w-[600px] mt-2">
              The hackathon aims to address challenges by developing innovative solutions aligned with the Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>

        {/* SDG - Tablet */}
        <div className="hidden md:block xl:hidden mt-12 px-5">
          <div className="flex justify-center">
            <SDGsGrid rowConfig={[3, 4, 5, 5]} sdgData={SDGData} />
          </div>
        </div>

        {/* Headers - Mobile */}
        <div className="block md:hidden mt-9">
          {/* SparkFest */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <img src={sparkyLogo} alt="" className="w-[60px] h-[60px] scale-x-[-1]" />
              <h1 className="title2 text-grey-100" style={{textShadow: "0px 4px 4px #A84038"}}>
                SPARK
                <span className="text-yellow">F</span>
                <span className='text-blue'>E</span>
                <span className='text-green'>S</span>
                <span className='text-red'>T</span>
              </h1>
              <img src={sparkyLogo} alt="" className="w-[60px] h-[60px]" />
            </div>
            <p className="text-white small1 text-center mt-5">
              The hackathon aims to address challenges by developing innovative solutions aligned with the Sustainable Development Goals (SDGs).
            </p>
          </div>

          {/* Prompt */}
          <div className="text-grey-100 mt-7">
            <h1 className="body1 text-center">SUSTAINABLE DEVELOPMENT GOALS</h1>
            <p className="small1 text-center mt-3">
              The hackathon aims to address challenges by developing innovative solutions aligned with the Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>

        {/* SDG - Mobile */}
        <div className="block md:hidden top-60 mt-4 pr-2">
          <div className="flex justify-center">
            <SDGsGrid rowConfig={[2, 3, 4, 4, 4]} sdgData={SDGData} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;