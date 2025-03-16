import React from 'react'
import RBlockSet from '/images/R-blockset.png'
import LBlockSet from '/images/L-blockset.png'
import TBlockSet from '/images/T-blockset.png'
import BBlockSet from '/images/B-blockset.png'
import { Particles } from '../magicui/particles.tsx'
import PixelButton from '../ui/pixelated-btn.tsx'

const JoinUs = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-full md:max-h-max lg:max-h-[967px] '>
        {/* Small particles */}
        <Particles
            className="absolute inset-0 -z-10"
            quantity={80}  // Fewer particles
            staticity={30}  // Slower movement
            ease={10}  // Smooth animation
            size={1.5}  // Larger particles for better visibility
        />
        
        {/* Medium particles */}
        <Particles
            className="absolute inset-0 -z-10"
            quantity={100}  // Fewer particles
            staticity={30}  // Slower movement
            ease={10}  // Smooth animation
            size={0.8}  // Larger particles for better visibility
        />

        {/* Large particles */}
        <Particles
            className="absolute inset-0 z-10"
            quantity={30}  // Fewer but larger
            staticity={50}  // Slower movement
            ease={20}  // Smooth animation
            size={5}  // Bigger particles
        />

        {/* Image - Desktop */}
        <div className='hidden lg:block absolute right-0'>
            <img src={RBlockSet} alt="" className='opacity-80' />
        </div>
        <div className='hidden lg:block absolute left-0'>
            <img src={LBlockSet} alt="" className='opacity-80' />
        </div>



        {/* banner */}
        <div className='z-20'>
            {/* top-blockset mobile */}
            <div className='block lg:hidden mb-16 mt-20'>
                <img src={TBlockSet} alt="" className='opacity-80 w-full p-4' />
            </div>

            <div className='z-20 header text-center text-grey-100' style={{textShadow: "0px 4px 4px #A84038"}}>
                April {'  '}
                <span className="text-yellow">2</span>
                    <span className='text-blue'>0</span>
                    <span className='text-green'>2</span>
                    <span className='text-red'>5</span>
            </div>
            <div className='z-20 text-center title2 mt-4 lg:mt-12 text-white'>
                Join ipsum dolor sit amet!
            </div>
            <div className='z-20 flex justify-center mt-8 lg:mt-12'>
                <PixelButton color='#4CAF50' classname='w-60'>Register now</PixelButton>
            </div>

            {/* bottom-blockset mobile */}
            <div className='block lg:hidden mt-16 mb-20'>
                <img src={BBlockSet} alt="" className='opacity-80 w-full p-4' />
            </div>
      </div>
    </div>
  )
}

export default JoinUs
