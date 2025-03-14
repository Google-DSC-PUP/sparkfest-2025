import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/features/Navbar";
import LandingPage from "./components/features/LandingPage";
import FaqsSection from "./components/features/FaqsSection";
import FooterPage from "./components/features/FooterPage";
import About from "@/components/features/About";
import backgroundImage from "@/assets/landing-page-image.png";

function App() {
  return (
    <BrowserRouter>
      <div
        className="relative  custom-gradientflex flex-col items-center justify-center min-h-svh w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <Navbar />
      <LandingPage />
      <About />
      <FaqsSection />
      <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
