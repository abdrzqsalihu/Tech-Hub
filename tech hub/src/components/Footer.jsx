import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section>
        <div>
            <div>
                <img src={logo} alt="" />
                <h1 className='text-[#1E1100] mt-5'>Contact Us</h1>
                <p className='text-[#6D737A] mt-5'>Call : +234 123 456 7889</p>
                <p className='text-[#6D737A] mt-5'>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                <h2 className='text-[#1E1100] mt-5'>Email: example@mail.com</h2>
            </div>
        </div>
    </section>
  )
}

export default Footer