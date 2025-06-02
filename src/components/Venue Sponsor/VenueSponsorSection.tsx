import { VenueSponsorHeader } from "./VenueSponsorHeader.tsx";
import globe from "../../assets/Venue Sponsor/globe.png";
import RBlockSet from '/images/R-blockset.png'
import LBlockSet from '/images/L-blockset.png'
import TBlockSet from '/images/T-blockset.png'
import BBlockSet from '/images/B-blockset.png'
import { Particles } from '../magicui/particles.tsx'
import SVGComponent from "../ui/SVGComp.tsx";
import React from "react";

const cards = [
  {
    title: "#GlobeSparkfest2025",
    description:
      "Redeem a minimum of 1 Rewards Point via the GlobeOne app or PHP10 via GCash to enter the event. All proceeds go to the Pawssion Project.",
    bgColor: "bg-blue-500",
    bdLight: "#57CAFF",
    bdDark: "#446FB8",
    bgMain: "#4285F4",
  }
];


export default function VenueSponsorSection() {
  return (
    <div id='join' className='relative flex justify-center items-center w-full h-[967px] md:min-h-max lg:max-h-[967px] '>
      {/* Small particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={1400}
        staticity={30}
        ease={10}
        size={1.5}
      />

      {/* Medium particles */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={200}
        staticity={30}
        ease={10}
        size={0.8}
      />

      {/* Large particles */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={60}
        staticity={50}
        ease={20}
        size={5}
      />

      {/* Image - Desktop */}
      <div className='hidden lg:block absolute right-0'>
        <img src={RBlockSet} alt="" className='opacity-80' />
      </div>
      <div className='hidden lg:block absolute left-0'>
        <img src={LBlockSet} alt="" className='opacity-80' />
      </div>

      {/* banner */}
      <div className='z-20 px-4 max-w-xl'>
        {/* top-blockset mobile */}
        <div className='block lg:hidden mb-16 mt-20'>
          <img src={TBlockSet} alt="" className='opacity-80 w-full p-4' />
        </div>

        <VenueSponsorHeader />
        <div
          className='body1 text-grey-100 leading-tight flex justify-center items-center gap-3 text-[2.5rem] text-shadow'
          style={{ textShadow: "0px 4px 4px #A84038" }}
        >
          <span>Co Presented By:</span>
          <img src={globe} alt="Globe" className="h-16 w-auto" />
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

        {/* bottom-blockset mobile */}
        <div className='block lg:hidden mt-16 mb-20'>
          <img src={BBlockSet} alt="" className='opacity-80 w-full p-4' />
        </div>
      </div>
    </div>
  );
}