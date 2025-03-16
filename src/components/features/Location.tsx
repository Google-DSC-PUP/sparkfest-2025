import React from "react";

const Location = () => {
  return (
    <div className="w-full min-h-[940px] flex items-center justify-center ">
      <div className="relative w-full flex justify-center items-center flex-col">
        <div className="absolute z-30 left-0 bottom-35 lg:bottom-0">
          <img
            src="/src/assets/lightning-1.png"
            alt="Left Lightning"
            className="w-25 md:w-50 lg:w-80 2xl:w-150"
          />
        </div>

        <div className="absolute z-30 right-0 bottom-35  lg:bottom-0">
          <img
            src="/src/assets/lightning-2.png"
            alt="Right Lightning"
            className="w-25 md:w-50 lg:w-80 2xl:w-150"
          />
        </div>

        <div className="flex items-center justify-center mb-4 text-center">
          <h1
            className="mobile-headers md:header2"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "rgba(241, 243, 244, 1)",
            }}
          >
            WHERE’S THE FUN HAPPENING?
          </h1>
        </div>

        <div className="z-20 flex flex-col items-center justify-center max-w-[1200px] p-2">
          <div className="relative bg-black p-6 w-full max-w-[81%] rounded-t-lg">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.045749749116!2d121.0080721764348!3d14.596468977175125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd56183c45%3A0x9f3cd2bc8713cb09!2sPUP%20Claro%20M.%20Recto%20Hall!5e0!3m2!1sen!2sph!4v1741669752681!5m2!1sen!2sph"
              className="w-full aspect-[16/9] min-h-[250px] max-h-[500px]"
            ></iframe>
            <div className="p-3  w-full flex justify-center items-center">
              <img
                src="src\assets\Sparkfest-Screen.png"
                alt="Sparkfest Logo"
                className="w-full max-w-[100px] sm:max-w-[150px]"
              ></img>
            </div>
          </div>

          <div className="-mt-[10%] z-10">
            <img
              src="src\assets\Joystick-Buttons.png"
              alt="Joystick Buttons"
              className="w-full"
            ></img>
            <div className="bg-black w-full text-white py-6 px-2 flex flex-col justify-center items-center">
              <p className="body1">Claro M. Recto Hall</p>
              <p className="title2 text-center">
                Polytechnic University of the Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
