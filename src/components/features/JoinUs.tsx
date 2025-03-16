import React from 'react'
import RBlockSet from '/images/R-blockset.png'
import LBlockSet from '/images/L-blockset.png'
import { Particles } from '../magicui/particles'
import PixelButton from '../ui/pixelated-btn'

const JoinUs = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-[967px]'>
        {/* Small particles */}
        <Particles
            className="absolute inset-0"
            quantity={80}  // Fewer particles
            staticity={30}  // Slower movement
            ease={10}  // Smooth animation
            size={1.5}  // Larger particles for better visibility
        />
        
        {/* Medium particles */}
        <Particles
            className="absolute inset-0"
            quantity={100}  // Fewer particles
            staticity={30}  // Slower movement
            ease={10}  // Smooth animation
            size={0.8}  // Larger particles for better visibility
        />

        {/* Large particles */}
        <Particles
            className="absolute inset-0"
            quantity={30}  // Fewer but larger
            staticity={50}  // Slower movement
            ease={20}  // Smooth animation
            size={5}  // Bigger particles
        />

        {/* images */}
        <div className='absolute right-0 '>
            <img src={RBlockSet} alt="" />
        </div>
        <div className='absolute left-0'>
            <img src={LBlockSet} alt="" />
        </div>

        {/* banner */}
        <div className=''>
            <div className='header text-center text-white' style={{textShadow: "0px 4px 4px #A84038"}}>
                April {'  '}
                <span className="text-yellow">2</span>
                    <span className='text-blue'>0</span>
                    <span className='text-green'>2</span>
                    <span className='text-red'>5</span>
            </div>
            <div className='text-center title2 mt-12 text-white'>
                Join ipsum dolor sit amet!
            </div>
            <div className='flex justify-center mt-12'>
                <PixelButton color='#4CAF50' classname='w-60'>Join Now</PixelButton>
            </div>
      </div>
    </div>
  )
}

export default JoinUs
