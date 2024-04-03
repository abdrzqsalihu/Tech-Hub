import React from 'react'
import { book, curve1, handshake, laptop, hand } from '../assets'
import styles from '../style'

const Choose = () => (
    <section>
        <div className={`${styles.flexCenter} flex justify-center items-center`}>
        <div className={`relative text-center text-[40px]`}>
            <h1 className='text-[#1E1100] mt-10' style={{fontFamily: 'public sans',fontWeight: '700'}}>Why <span className='text-[#20B486]'>Choose Us</span>
            <div style={{marginTop: '-10px'}} className='ml-[45%] md:ml-[45%]'>
                <img src={curve1} alt=""/>
            </div>
            </h1>
        </div>
        </div>

        <div className='md:p-20 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center mx-auto mt-16'>
                <img src={book} alt="" />
                <div>
                    <h1 className='text-[#1E1100] text-[28px] md:mt-0 mt-10' style={{fontFamily: 'public sans'}}>Flexibility and Adaptability</h1>
                    <p className='text-[#1E1100] text-[24px] mt-5' style={{fontFamily:'public sans'}}>Our school offers flexible learning options, such <br className='sm:block hidden'/> as and online courses, to accommodate different <br className='sm:block hidden'/> schedules and learning preferences. This <br className='sm:block hidden'/> flexibility allows students to pursue their <br className='sm:block hidden'/> education while managing other responsibilities.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto mt-16'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-[#1E1100] text-[28px] md:mt-0 mt-10' style={{fontFamily: 'public sans'}}>Industry Partnerships and Internships</h1>
                    <p className='text-[#1E1100] text-[24px] mt-5' style={{fontFamily:'public sans'}}>We have established strong relationships with <br className='sm:block hidden'/> industry partners, which provide students with <br className='sm:block hidden'/> valuable networking opportunities and access to <br className='sm:block hidden'/> internship placements upon graduation</p>
                </div>
                <img src={handshake} alt="" className='order-1 md:order-2' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto mt-16'>
                <img src={hand} alt="" />
                <div>
                    <h1 className='text-[#1E1100] text-[28px] md:mt-0 mt-10' style={{fontFamily: 'public sans'}}>Hands-On Learning</h1>
                    <p className='text-[#1E1100] text-[24px] mt-5' style={{fontFamily:'public sans'}}>Our programs emphasize hands-on projects, <br className='sm:block hidden'/> practical exercises, and real-world simulations <br className='sm:block hidden'/> that allow students to apply their skills and  <br className='sm:block hidden'/> knowledge in a supportive and engaging <br className='sm:block hidden'/> environment.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto mt-16'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-[#1E1100] text-[28px] md:mt-0 mt-10' style={{fontFamily: 'public sans'}}>Career Support Services</h1>
                    <p className='text-[#1E1100] text-[24px] mt-5' style={{fontFamily:'public sans'}}>We offer comprehensive career support services, <br className='sm:block hidden'/> including resume building, interview preparation, <br className='sm:block hidden'/> job placement assistance, and networking events. </p>
                </div>
                <img src={laptop} alt="" className='order-1 md:order-2'/>
            </div>
        </div>
    </section>
)

export default Choose