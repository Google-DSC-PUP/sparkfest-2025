import { useEffect } from "react";
import Navbar from "@/components/features/Navbar.tsx";
import LandingPage from "./components/features/LandingPage.tsx";
import SponsorsSection from "./components/Sponsors/SponsorsSection.tsx";
import FaqsSection from "./components/features/FaqsSection.tsx";
import FooterPage from "./components/features/FooterPage.tsx";
import About from "@/components/features/About.tsx";
import backgroundImage from "@/assets/landing-page-image.png";
import Location from "@/components/features/Location.tsx";
import Highlights from "@/components/features/Highlights.tsx";
import HackatonKit from "./components/features/HackatonKit.tsx";
import JoinUs from "./components/features/JoinUs.tsx";
import React from "react";

function App() {
  useEffect(() => {
    // Optional: Hide scrollbar for consistent look
    const style = document.createElement("style");
    style.textContent = `
      /* Hide scrollbar for Chrome, Safari and Opera */
      *::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="relative custom-gradient flex flex-col h-max min-h-svh w-full bg-cover bg-center"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="about" className="navbar-spacing">
        <About />
      </section>
      <section id="location" className="navbar-spacing">
        <Location />
      </section>
      <section id="highlights" className="navbar-spacing">
        <Highlights />
      </section>
      <section id="sponsors" className="navbar-spacing">
        <SponsorsSection />
      </section>
      <section id="hackathon-kit" className="navbar-spacing">
        <HackatonKit />
      </section>
      <section id="join-us" className="navbar-spacing">
        <JoinUs />
      </section>
      <section id="faqs" className="navbar-spacing">
        <FaqsSection />
      </section>
      <FooterPage />
    </div>
  );
}

export default App;
