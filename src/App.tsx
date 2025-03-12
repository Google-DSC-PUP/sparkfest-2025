import LandingPage from "./components/features/LandingPage";
import SponsorsSection from "./components/Sponsors/SponsorsSection";

function App() {
  return (
    <div className="relative custom-gradient flex flex-col ">
      <LandingPage />
      <SponsorsSection />    
    </div>
  );
}

export default App;
