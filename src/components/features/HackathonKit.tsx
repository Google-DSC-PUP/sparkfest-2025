import React from "react";
import { Button } from "../ui/button";

//color (#642f76,)


const HackathonKit = () => {
    return <div className="w-full h-[100vh] flex flex-col md:flex-row bg-gradient-to-b from-fuchsia-900 to-blue-900">
            <div className="w-[100%] text-center  md:w-[50vw] md:text-left h-[100vh] flex justify-center items-center">
                <div className="w-[100%] md:w-[90%] h-[45vw] ">
                    <h1 className="[text-shadow:_0_4.56px_4.56px_#A84038] leading-[150px] text-white header">HACKATHON<br></br> <span className="text-[var(--color-yellow)]">K</span><span className="text-[var(--color-blue)]">I</span><span className="text-[var(--color-green)]">T</span><img src="src/assets/IsoSparky-Head-BASE.png" className="hidden aspect-1/1 w-[147px] md:inline"></img></h1>
                    <img src="src/assets/Artboard 1 1.png" className="justify-self-center aspect-square w-[70vw] h-[70vw] self-center rounded-[20px] border-solid border-white border-[5px] md:hidden sm:block"></img>
                    <p className="body1 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Button>hi</Button>
                </div>
            </div>
            <div className="w-[50vw] flex justify-center align-center height-[80vh] ">
                <div className="w-[90%] h-[100vh] flex justify-center align-center">
                    <img src="src/assets/Artboard 1 1.png" className="hidden md:aspect-square w-[45vw] h-[45vw] self-center rounded-[20px] border-solid border-white border-[5px] md:block"></img>
                </div>
            </div>
        </div>
}

export default HackathonKit;