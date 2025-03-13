import React from "react";
import { SDGData } from "@/data/dataLoader";
import sparkyLogo from "/images/rendered_v3.png";

const About = () => {
  return (
    <section className="relative h-[940px] w-full custom-gradient-about-2">
      {/* About */}
      <div className="mt-9">
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



    </section>
  );

};

export default About;
