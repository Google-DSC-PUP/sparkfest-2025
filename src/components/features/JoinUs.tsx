import React from 'react'
import RBlockSet from '/images/R-blockset.png'
import LBlockSet from '/images/L-blockset.png'
import TBlockSet from '/images/T-blockset.png'
import BBlockSet from '/images/B-blockset.png'
import { Particles } from '../magicui/particles.tsx'
import PixelButton from '../ui/pixelated-btn.tsx'

const JoinUs = () => {
  return (
    <div id='join' className='relative flex justify-center items-center w-full h-[967px] md:min-h-max lg:max-h-[967px] '>
        {/* Small particles */}
        <Particles
            className="absolute inset-0 -z-10"
            quantity={1400}
            staticity={30}
            ease={10}
            size={1.5}
        />
        
        {/* Medium particles */}
        <Particles
            className="absolute inset-0 -z-10"
            quantity={200}
            staticity={30}
            ease={10}
            size={0.8}
        />

        {/* Large particles */}
        <Particles
            className="absolute inset-0 z-10"
            quantity={60}
            staticity={50}
            ease={20}
            size={5}
        />

        {/* Image - Desktop */}
        <div className='hidden lg:block absolute right-0'>
            <img src={RBlockSet} alt="" className='opacity-80' />
        </div>
        <div className='hidden lg:block absolute left-0'>
            <img src={LBlockSet} alt="" className='opacity-80' />
        </div>

        {/* banner */}
        <div className='z-20 px-4 max-w-xl'>
            {/* top-blockset mobile */}
            <div className='block lg:hidden mb-16 mt-20'>
                <img src={TBlockSet} alt="" className='opacity-80 w-full p-4' />
            </div>

            {/* Date Info */}
            <div
              className='z-20 header text-center text-grey-100 leading-tight'
              style={{ textShadow: "0px 4px 4px #A84038", fontSize: '2.5rem' }}
            >
              May 31 - June 6 <br />
              <span className="text-yellow">Online / Asynchronous Sessions</span>
            </div>

            <div
              className='z-20 header text-center text-grey-100 mt-4 mb-6'
              style={{ textShadow: "0px 4px 4px #A84038", fontSize: '2rem' }}
            >
              June 7 <br />
              <span className="text-blue">Onsite Pitching Day @ Globe Tower</span>
            </div>
            <div
            className='z-20 text-center title2 mt-4 lg:mt-12 glitch'
            style={{ fontSize: '1.5rem' }}
            >
            Step in. Spark change. Shape tomorrow.
            </div>

            <div className='z-20 flex justify-center mt-8 lg:mt-12'>
                <PixelButton color='#4CAF50' classname='w-60'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfafw4QAz9ICVlQ2zXej7995vgQT5S_ldLupVTG_C0RDh1Dpw/viewform" target="_blank" rel="noopener noreferrer" className='block w-full text-center'>
                        Register now
                    </a>
                </PixelButton>
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
