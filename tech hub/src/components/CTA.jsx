import React from 'react'
import {Call} from '../assets'


const CTA = () => {
  return (
    <section className='p-5'>
        <div className='grid grid-cols-1 md:grid  lg:grid-cols-2 gap-5 items-center'>
            <div>
                <img src={Call} alt="" />
            </div>
            <div>
                <h1 className='text-[#1E1100] lg:text-[48px] text-[25px]' style={{fontFamily: 'public-sans', fontWeight:'600'}}>Join <span className='text-[#EEA10D]'>World's largest</span> learning platform today</h1>
                <p className='lg:text-[24px] text-[#1E1100] text-[20px]' style={{fontFamily: 'public-sans', fontWeight:'400',}}>Start learning by sending your application</p>
                <div className='mt-5'>
                <a href="#" style={{fontFamily: 'poppins', fontSize: '18px', fontWeight: '100', background: '#EEA10D', padding: '10px', borderRadius: '5px'}}>Apply Now</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA