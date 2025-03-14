import { Button } from "@/components/ui/button";
import LandingPage from "./components/features/LandingPage";
import About from "@/components/features/About";

function App() {
  return (
    <div className="relative custom-gradient flex flex-col ">
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
