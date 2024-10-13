import React from 'react'
import Navbar from './Navbar'
import arrow from '../../Images/shape.svg'
import img from '../../Images/Mask group.svg'
import vector from '../../Images/Vector 1.svg'
import vector2 from '../../Images/Vector 2.svg'
import vector3 from '../../Images/Vector 3.svg'
import vector4 from '../../Images/Vector 4.svg'
import location from '../../Images/Location-Icon.svg'
import call from '../../Images/phone-call.svg'
import mail from '../../Images/mail.svg'
import arrowR from '../../Images/chevron-small-down.svg'
import arrowL from '../../Images/chevron-small.svg'
export default function Hero() {
  return (
    <div className='pb-20'>
        <Navbar />
        <div className='py-28 flex flex-col md:flex-row items-center '>
            <div className=' relative items-center md:items-start flex flex-col justify-between flex-1 order-2 md:order-1'>
                <h1 className='z-20 text-[white] text-[24px] font-extrabold'><span className='bg-linearR bg-clip-text text-[transparent] text-[36px]'>Dive</span> Into The Depths<br/>Of <span className='bg-linearR bg-clip-text text-[transparent] text-[32px]'>Virtual Reality</span></h1>
                <p className='z-20 max-w-[450px] hidden md:block text-[16px] text-[white] mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                <div className='z-20 mt-16 flex gap-8'>
                <button className='font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>BUILD YOUR WORLD</button>
                <img src={arrow} alt='arrow' className='animate-animate hidden md:block cursor-pointer'/>
                </div>
                <img src={vector4} alt='line' className='hidden md:block md:absolute left-[-80px] top-[-10%]'/>
            </div>
            <div className="image order-1 flex-1 flex justify-center relative ">
  {/* الصورة الرئيسية */}
  <img src={img} alt="mask" className="z-10 max-w-[315px] h-[277px] md:max-w-[490px] md:h-[426px]" 
  />

  {/* الخط المنحني الثاني */}
  <img 
    src={vector2} 
    alt="line" 
    className="absolute top-[-100px] md:top-[-150px] md:left-[20%] max-w-[250px] md:max-w-[300px] h-auto" 
  />

  {/* الخط المنحني على اليمين */}
  <img 
    src={vector} 
    alt="line" 
    className="z-[1] absolute right-[-40px] top-[-70px] md:right-[10%] md:top-[-110px] max-w-[180px] md:max-w-[250px] h-auto" 
  />

  {/* الخط السفلي */}
  <img 
    src={vector3} 
    alt="line" 
    className="absolute bottom-[-50px] max-w-[400px] md:max-w-[600px] h-auto" 
  />
</div>
        </div> 

        <div className='py-5 px-2 wrapper-scroll overflow-auto flex items-center justify-between border-2 rounded-full bg-radial'>
            <div className='relative flex justify-center w-full flex-shrink-0 md:flex-shrink-[1] gap-4 m-auto items-center md:after:w-[2px] md:after:h-[70px] md:after:bg-[#c0b7e865]'>
                <img src={location} alt='location'/>
                <div>
                    <h3 className='text-[24px] font-extrabold text-[white]'>Pay Us a Visit</h3>
                    <p className='text-[white] text-[14px] font-light'>Union St, Seattle, WA 98101, United States</p>
                </div>
                <img src={arrowR} alt='arrow' className='hidden sm:block md:hidden absolute right-0 border-[1px] rounded-full text-[white] bg-[white]'/>
                <img src={arrowL} alt='arrow' className='hidden sm:block md:hidden absolute left-[4%] border-[1px] rounded-full text-[white] bg-[white]'/>
            </div>

            <div className='relative flex justify-center w-full flex-shrink-0 md:flex-shrink-[1] gap-4 m-auto items-center'>
                <img src={call} alt='location'/>
                <div>
                    <h3 className='text-[24px] font-extrabold text-[white]'>Give Us a Call</h3>
                    <p className='text-[white] text-[14px] font-light'>(110) 1111-1010</p>
                </div>
                <img src={arrowR} alt='arrow' className='hidden sm:block md:hidden absolute right-[0] border-[1px] rounded-full text-[white] bg-[white]'/>
                <img src={arrowL} alt='arrow' className='hidden sm:block md:hidden absolute left-[4%] border-[1px] rounded-full text-[white] bg-[white]'/>
            </div>

            <div className='relative flex justify-center w-full flex-shrink-0 md:flex-shrink-[1] gap-4 m-auto items-center md:before:w-[2px] md:before:h-[70px] md:before:bg-[#c0b7e865]'>
                <img src={mail} alt='location'/>
                <div>
                    <h3 className='text-[18px] font-extrabold text-[white]'>Send Us a Message</h3>
                    <p className='text-[white] text-[14px] font-light'>Contact@HydraVTech.com</p>
                </div>
                <img src={arrowR} alt='arrow' className='hidden sm:block md:hidden absolute right-0 border-[1px] rounded-full text-[white] bg-[white]'/>
                <img src={arrowL} alt='arrow' className='hidden sm:block md:hidden absolute left-[4%] border-[1px] rounded-full text-[white] bg-[white]'/>
            </div>
        </div>
    </div>
  )
}

