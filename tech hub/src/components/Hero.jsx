import React from 'react';
import styles from '../style';
import { hero, play } from '../assets';

const Hero = () => {
  return (
    <section className='flex flex-1 flex-col lg:flex-row md:pt-20 pb-0 mt-10'>
        <div className={`${styles.heading2} mt-16`}>
            <h1 style={{fontFamily: 'public sans'}} className='text-[30px]'>
            Unleash Your <span style={{fontFamily: 'public sans', color: '#EEA10D'}}>Tech Skills</span> <br className='sm:block hidden'/> and Shape the Future <br className='sm:block hidden'/> with <span style={{fontFamily: 'forte', color: '#EEA10D'}}>Tech Hub</span>
            </h1>
            <h2 className={`${styles.paragraph} text-white`}>
            Inspiring Brilliance, Shaping the Tech World
            </h2>
            <div className='flex items-center  gap-10'>
                <div>
                <a href="#" style={{fontFamily: 'poppins', fontSize: '18px', fontWeight: '100', background: '#EEA10D', padding: '10px', borderRadius: '5px'}}>Apply Now</a>
                </div>

                <div className='flex items-center'>
                  <img src={play} alt="" className='w-[15%]'/>
                <a href="#" style={{fontFamily: 'poppins', fontWeight: '100', marginLeft: '25px'}}>Watch how it works</a>
                </div>
            </div>
        </div>

        <div className='mt-2'>
            <img src={hero} alt=""  className='w-[100%]'/>
        </div>
    </section>
  )
}

export default Hero