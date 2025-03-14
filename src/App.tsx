import { BrowserRouter } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/features/Navbar";
import backgroundImage from "@/assets/landing-page-image.png"; // Import the image

function App() {
  return (
    <BrowserRouter>
      <div
        className="flex flex-col items-center justify-center min-h-svh w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Button>Click me</Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
