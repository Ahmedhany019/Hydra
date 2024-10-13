import React from 'react'
import arrow from '../../Images/Component 1.svg'
import arrowR from '../../Images/chevron-small-down.svg'
import arrowL from '../../Images/chevron-small.svg'
import {testimonials} from '../data'
export default function WhyBuild() {

  const data = testimonials.map((e,i)=>(
    <div key={i} className='relative w-full flex-shrink-[0] flex flex-col p-4 md:max-w-[310px] h-[511px] items-center justify-between bg-radial rounded-3xl'>
      <img src={e.img} alt='avatar' className='p-2 bg-primary rounded-full'/>
      <p className='text-[white] border-b border-secondary pb-3 text-[24px] font-extrabold'>{e.title}</p>
      <p className='text-[white]  text-[12px] font-light'>{e.desc}</p>
      <button className='mx-auto md:mx-0 mt-5 font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>TRY IT NOW</button>
      <img src={arrowR} alt='arrow' className='sm:hidden absolute top-1/2 -translate-y-1/2 right-0 bg-linearR rounded-full '/>
      <img src={arrowL} alt='arrow' className='sm:hidden absolute top-1/2 -translate-y-1/2 bg-linearR rounded-full left-0'/>
    </div>
  ))

  return ( 
    <section className='my-16 relative gap-6'>

<div className='mb-16 flex justify-between items-center'>

<div className='flex-1 flex flex-col items-center md:items-start'>
  <h1 className='text-[36px] font-extrabold text-[white]'>WHY BUILD</h1>
  <div className='text-[36px] gap-8 flex items-center text-[white]'>
    <p>TO HYDRA VR</p> 
    <img src={arrow} alt='arrow' className='hidden md:block'/>
  </div>
</div>

<div className='hidden md:block flex-1'>
<p className='text-[white] overflow-auto'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
</div>

</div>

<div className=' cards wrapper sm:grid md:grid-cols-4 sm:grid-cols-2 gap-3 flex overflow-scroll'>
    {data}

</div> 
    </section>
  )
}




 