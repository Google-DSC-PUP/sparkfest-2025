import React from 'react'
import Logo from '/svgs/IsoSparky-Head-BASE.svg'
import PixelButton from '../ui/pixelated-btn'
import BelowLogo from '/images/Below-icon.png'
import HackathonKitImage from '/images/hackathon-kit-image.png'

const HackatonKit = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        {/* Desktop */}
        <div className='hidden xl:flex min-h-[940px] pt-32 pb-48 px-20 gap-12'>
            <div>
                <h1 className='header text-grey-100' style={{textShadow: "0px 4px 4px #A84038"}}>HACKATHON</h1>
                <div className='flex header' style={{textShadow: "0px 4px 4px #A84038"}}>
                    <span className="text-yellow">K</span>
                    <span className='text-blue'>I</span>
                    <span className='text-green'>T</span>
                    <span className='text-red'>!</span>
                    <img src={Logo} alt="" className='w-32 h-32' />
                </div>
                <p className='body1 text-grey-100 mt-6 w-[756px] mb-11'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <PixelButton color='#2196F3' classname='w-[240px]'>
                    <div className='flex items-center gap-3'>
                        <img src={BelowLogo} alt="" />
                        <p>
                            Download Kit
                        </p>
                    </div>
                </PixelButton>
            </div>

            <div className='h-full w-full flex justify-center items-center'>
                <div className='w-[709] h-[640px] border-[5px] border-white rounded-xl overflow-hidden' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}}>
                    <img src={HackathonKitImage} alt="" className='h-full w-full' />
                </div>
            </div>
        </div>

        {/* Tablet */}
        <div className="hidden md:flex xl:hidden min-h-[940px] pt-32 pb-48 2xl:px-20">
            <div>
                <h1 className='header2 text-grey-100 text-center' style={{textShadow: "0px 4px 4px #A84038"}}>HACKATHON</h1>
                <div className='flex justify-center header2 text-center mb-4' style={{textShadow: "0px 4px 4px #A84038"}}>
                    <span className="text-yellow">K</span>
                    <span className='text-blue'>I</span>
                    <span className='text-green'>T</span>
                    <span className='text-red'>!</span>
                    {/* <img src={Logo} alt="" className='w-32 h-32' /> */}
                </div>
                <div className='flex justify-center w-full'>
                    <img src={HackathonKitImage} alt="" className='h-[350px] w-[400px] border-[5px] border-white rounded-xl' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} />
                </div>
                <p className='small1 text-center text-grey-100 my-8 mx-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                
                <div className='w-full flex justify-center items-center'>
                    <PixelButton color='#2196F3' classname='w-[240px]'>
                        <div className='flex justify-center gap-3'>
                            <img src={BelowLogo} alt="" />
                            <p>
                                Download Kit
                            </p>
                        </div>
                    </PixelButton>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className='flex md:hidden flex-col min-h-[852px] mt-16'>
            <div>
                <h1 className='title1 text-grey-100 text-center' style={{textShadow: "0px 4px 4px #A84038"}}>HACKATHON</h1>
                <div className='flex justify-center title1 text-center mb-4' style={{textShadow: "0px 4px 4px #A84038"}}>
                    <span className="text-yellow">K</span>
                    <span className='text-blue'>I</span>
                    <span className='text-green'>T</span>
                    <span className='text-red'>!</span>
                    {/* <img src={Logo} alt="" className='w-32 h-32' /> */}
                </div>
                <div className='flex justify-center w-full'>
                    <img src={HackathonKitImage} alt="" className='h-[373px] w-[350px] border-[5px] border-white rounded-xl' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"}} />
                </div>
                <p className='small2 text-center text-grey-100 my-5 mx-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                
                <div className='w-full flex justify-center items-center'>
                    <PixelButton color='#2196F3' classname='w-[240px]'>
                        <div className='flex justify-center gap-3'>
                            <img src={BelowLogo} alt="" />
                            <p>
                                Download Kit
                            </p>
                        </div>
                    </PixelButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HackatonKit
