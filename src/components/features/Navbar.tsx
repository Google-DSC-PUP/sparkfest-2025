import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/60 backdrop-blur-md px-4 md:px-12 py-4 flex justify-between items-center z-40">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Sparkfest Logo"
          className="h-8 md:hidden cursor-pointer w-full"
          onClick={() => scrollToSection("home")}
        />
        <img
          src={Logo}
          alt="Sparkfest Logo"
          className="hidden md:block cursor-pointer w-full"
          onClick={() => scrollToSection("home")}
        />
      </div>
      <div className="hidden md:flex items-center gap-10">
        <button
          onClick={() => scrollToSection("about")}
          className="body2 text-gray-100 hover:text-[rgba(87,202,255,1)] transition-all "
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("sponsors")}
          className="body2 text-gray-100 hover:text-[rgba(92,219,109,1)] text-base transition-all "
        >
          Sponsors
        </button>
        <button
          onClick={() => scrollToSection("faqs")}
          className="body2 text-gray-100 hover:text-[rgba(255,125,175,1)] text-base transition-all "
        >
          FAQs
        </button>
        <button
          onClick={() => scrollToSection("join")}
          className="body2 bg-[rgba(52,168,83,1)] hover:bg-[#4CD964] px-8 py-3 rounded-full text-white transition-all text-nowrap duration-300 "
        >
          Join Now
        </button>
      </div>
      <button
        className="md:hidden text-white flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <div className="w-6 space-y-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </div>
        )}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col z-50">
          <div className="w-full flex justify-between items-center px-4 py-4">
            <img
              src={Logo}
              alt="Sparkfest Logo"
              className="h-8 cursor-pointer"
              onClick={() => {
                scrollToSection("home");
                setIsOpen(false);
              }}
            />
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full border-t border-gray-800"></div>
            <button
              onClick={() => scrollToSection("about")}
              className="w-full py-3 text-center small2 text-gray-100 hover:text-[rgba(87,202,255,1)] text-base"
            >
              About
            </button>
            <div className="w-full border-t border-gray-800"></div>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="w-full py-3 text-center small2 text-gray-100 hover:text-[rgba(92,219,109,1)] text-base"
            >
              Sponsors
            </button>
            <div className="w-full border-t border-gray-800"></div>
            <button
              onClick={() => scrollToSection("faqs")}
              className="w-full py-3 text-center small2 text-gray-100 hover:text-[rgba(255,125,175,1)] text-base"
            >
              FAQs
            </button>
            <div className="w-full border-t border-gray-800"></div>
            <div className="flex justify-center w-full mt-6 mb-6">
              <button
                onClick={() => scrollToSection("join")}
                className="button2 bg-[rgba(52,168,83,1)] hover:bg-[#4CD964] px-8 py-2 rounded-full text-white text-base transition-all duration-300"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
