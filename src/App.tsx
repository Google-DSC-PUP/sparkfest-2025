import { useEffect } from "react";
import Navbar from "@/components/features/Navbar";
import LandingPage from "@/components/features/LandingPage";
import SponsorsSection from "@/components/Sponsors/SponsorsSection";
import FaqsSection from "@/components/features/FaqsSection";
import FooterPage from "@/components/features/FooterPage";
import About from "@/components/features/About";
import backgroundImage from "@/assets/landing-page-image.png";
import Location from "@/components/features/Location";
import Highlights from "@/components/features/Highlights";
import JoinUs from "@/components/features/JoinUs";
import HackatonKit from "@/components/features/HackatonKit";

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
      <section id="join-us">
        <JoinUs />
      </section>
      <section id="hackaton-kit">
        <HackatonKit />
      </section>
      <section id="faqs" className="navbar-spacing">
        <FaqsSection />
      </section>
      <FooterPage />
    </div>
  );
}

export default App;
