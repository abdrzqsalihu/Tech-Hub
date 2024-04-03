import React from 'react'
import styles from '../style';
import { arrow, briefcase, camera, curve2, database, filehtml, lightbulb, microphone, musicnote, pennib, sunhorizon } from '../assets';

const Categories = () => {
  return (
    <section>
        <div className={`${styles.flexCenter} flex justify-center items-center`}>
        <div className={`relative text-center lg:text-[40px] text-[25px]`}>
            <h1 className='text-[#1E1100] mt-10' style={{fontFamily: 'public sans',fontWeight: '700'}}>Our <span className='text-[#20B486]'>Categories</span>
            <div className='ml-[30%] md:ml-[40%]'>
                <img src={curve2} alt="" />
            </div>
            </h1>
        </div>
        </div>
        <div>
            <p className='text-[#1E1E1E] text-center mt-3 text-[20px]' style={{fontFamily:'public sans'}}>A peck at the various courses you can apply for</p>
        </div>

        <div className='flex flex-1 gap-10 justify-center md:flex-row flex-col mt-10'>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={pennib} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Design</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={filehtml} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Development</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={lightbulb} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Cyber Security</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
        </div>

        <div className='flex flex-1 gap-10 justify-center md:flex-row flex-col mt-10'>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={camera} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Google AI</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={musicnote} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Data Analysis</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={database} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Data Science</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
        </div>

        <div className='flex flex-1 gap-10 justify-center md:flex-row flex-col mt-10'>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={microphone} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Marketing</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={briefcase} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Cloud Computing</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
            <div className='flex items-center justify-between bg-white shadow-md p-4 hover:shadow-xl transition duration-500 transform hover:scale-105' style={{height: '76px', width: '312px'}}>
                <h1 className='text-[#1E1E1E] flex items-center'><img src={sunhorizon} alt="" className='w-[38px]'/> <span className='ml-4 text-[20px]' style={{fontWeight: '500'}}>Machine Learning</span></h1>
                <img src={arrow} alt="" className='w-[44px]'/>
            </div>
        </div>


    </section>
  )
}

export default Categories