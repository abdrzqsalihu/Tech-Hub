import React from 'react'

const Apply = ({styles}) => {
  return (
    <div><button type="button" className={`py-3 px-10 bg-[#EEA10D] font-poppins font-normal text-[15px] text-white outline-none ${styles} rounded-[10px]`}>Apply Now</button></div>
  )
}

export default Apply