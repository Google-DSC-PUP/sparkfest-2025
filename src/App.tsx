import LandingPage from "./components/features/LandingPage";
import FooterPage from "./components/features/FooterPage";
import FaqsSection from "./components/features/FaqsSection";

function App() {
  return (
    <div className="relative custom-gradient flex flex-col ">
      <LandingPage />
      <FaqsSection />
      <FooterPage />
    </div>
  );
}

export default App;
