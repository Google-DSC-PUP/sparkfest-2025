import SparkfestLogo from "@/assets/footer-logo.png";
import GDGLogo from "@/assets/gdg-logo.png";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import FooterBackground from "@/assets/footer-backgroud.png";
import React from "react";

const FooterPage = () => {
  return (
    <footer className="relative flex flex-col gap-4 mt-10 items-center justify-center w-full">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${FooterBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: "0.8",
        }}
      ></div>
      <h1 className="header hidden text-center lg:block text-grey-100 z-10">
        SEE YOU THERE!
      </h1>

      <div className="flex flex-col-reverse gap-6 sm:flex-row justify-around items-center w-full p-4 z-10">
        {/* Left Side */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <img
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            src={SparkfestLogo}
            alt="Sparkfest Logo"
          />
          <img
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            src={GDGLogo}
            alt="Sparkfest Logo"
          />
          <p className="small2 text-center sm:text-start text-grey-100">
            Bridging the gap between theory and practice.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/gdg.pupmnl" target="_blank">
              <div className="bg-grey-100 p-2 rounded-sm cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_8px_#FFFFFF]">
                <FaFacebookF
                  color="#1A3A68"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
            </a>
            <a href="https://www.facebook.com/gdg.pupmnl" target="_blank">
              <div className="bg-grey-100 p-2 rounded-sm cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_8px_#FFFFFF]">
                <FaLinkedinIn
                  color="#1A3A68"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
            </a>
            <a href="https://www.facebook.com/gdg.pupmnl" target="_blank">
              <div className="bg-grey-100 p-2 rounded-sm cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_8px_#FFFFFF]">
                <RiInstagramFill
                  color="#1A3A68"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
            </a>
            <a href="https://www.facebook.com/gdg.pupmnl" target="_blank">
              <div className="bg-grey-100 p-2 rounded-sm cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_8px_#FFFFFF]">
                <FaTiktok color="#1A3A68" className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-row justify-around sm:justify-start sm:gap-8 w-full sm:w-fit">
          <div className="text-grey-100 flex flex-col gap-4">
            <a href="#" className="cursor-pointer">
              <p className="text-[19px] font-mono font-bold">Sparkfest</p>
            </a>
            <a href="#about" className="cursor-pointer">
              <p className="small1">AboutUs</p>
            </a>
            <a href="#location" className="cursor-pointer">
              <p className="small1">Location</p>
            </a>
            <a href="#highlights" className="cursor-pointer">
              <p className="small1">Highlights</p>
            </a>
            <a href="#sponsors" className="cursor-pointer">
              <p className="small1">Sponsors</p>
            </a>
            <a href="#faqs" className="cursor-pointer">
              <p className="small1">FAQS</p>
            </a>
          </div>
          <div className="text-grey-100 flex flex-col gap-4">
            <p className="text-[19px] font-mono font-bold">GDG PUP</p>
            <a
              href="https://gdg.community.dev/gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines/"
              target="_blank"
              className="cursor-pointer"
            >
              <p className="small1">Community</p>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Side */}
      <div className="border-t border-grey-100 w-full flex justify-center z-10">
        <p className="small1 text-grey-100 text-center my-6">
          @ 2025 Sparkfest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
