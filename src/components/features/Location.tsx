import React from "react";

const Location = () => {
  return (
    <div
      className="bg-color-halftone-red min-h-screen flex items-center justify-center relative"
      style={{ backgroundColor: "rgba(255, 125, 175, 1)" }}
    >
      <div className="absolute left-0 bottom-35">
        <img
          src="/src/assets/lightning-1 1.svg"
          alt="Left Lightning"
          className="w-150"
        />
      </div>

      <div className="absolute right-0 bottom-48">
        <img
          src="/src/assets/lightning-3 1.svg"
          alt="Right Lightning"
          className="w-150"
        />
      </div>

      <div className="text-center relative z-10 max-w-1/2 p-4">
        <h1
          className="header2"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            color: "rgba(241, 243, 244, 1)",
          }}
        >
          WHERE'S THE FUN HAPPENING?
        </h1>

        <div className="bg-black rounded-lg p-4 pb-10">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.045749749116!2d121.0080721764348!3d14.596468977175125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd56183c45%3A0x9f3cd2bc8713cb09!2sPUP%20Claro%20M.%20Recto%20Hall!5e0!3m2!1sen!2sph!4v1741669752681!5m2!1sen!2sph"
              width="100%"
              height="500"
              className="rounded-t-lg"
            ></iframe>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="src\assets\Lower part.svg"
              alt="Lower Part"
              className="bottom-1"
            ></img>
          </div>
        </div>

        <div className="relative bottom-0 left-0 right-0 text-white text-center">
          <p className="small1">Claro M. Recto Hall</p>
          <p className="body1">
            Polytechnic University of the
            <br />
            Philippines
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
