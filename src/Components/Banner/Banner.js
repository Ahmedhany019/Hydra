import React from 'react'
import img1 from '../../Images/Hydra-Tech1 1.svg'
import img2 from '../../Images/Hydra-Tech2 1.svg'
import img3 from '../../Images/Hydra-Tech3 1.svg'
import img4 from '../../Images/Hydra-Tech4 1.svg'
import arrowDown from '../../Images/down.svg'
export default function Banner() {
  return (
    <section className='my-16'>
        <div className={`relative banner h-[300px] rounded-full bg-center flex justify-center items-center flex-col`}>
            <h1 className='text-[white] text-[16px] sm:text-[36px] font-extrabold'>TECHNOLOGIES & HARDWARE</h1>
            <p className='text-[white] text-[24px] sm:text-[36px] font-light'>USED BY HYDRA VR.</p>
            <div  className='hidden md:block bg-[#0E0E0E] cursor-pointer absolute rounded-full p-2 -bottom-[30px]'>
            <img src={arrowDown} alt='arrow' className='bg-linearR rounded-full'/>
            </div>
        </div>
        <div className='mt-16 companies sm:grid md:grid-cols-4 items-center sm:grid-cols-2 gap-3 flex overflow-scroll'>
            <img src={img1} alt='engine' className='relative flex-shrink-[0] '/>
            <img src={img2} alt='oculus' className='relative flex-shrink-[0] '/>
            <img src={img3} alt='unity' className='relative flex-shrink-[0] '/>
            <img src={img4} alt='vive' className='relative flex-shrink-[0] '/>
        </div>
    </section>
  )
}
