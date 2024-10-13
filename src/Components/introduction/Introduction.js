import React from 'react'
import arrow from '../../Images/Component 1.svg'
import about from '../../Images/Mask about.svg'
import line from '../../Images/Vector 7.svg'
import line2 from '../../Images/Vector 8.svg'
export default function Introduction() {
  return (
    <section className='flex flex-col md:flex-row relative gap-6'>

      <div className='flex flex-col justify-between flex-1 z-10 items-center md:items-start'>
        <div>
          <h1 className='text-[36px] font-extrabold text-[white]'>INTRODUCTION</h1>
          <div className='text-[36px] gap-8 flex items-center text-[white]'>
            <p>TO HYDRA VR</p> 
            <img src={arrow} alt='arrow' className='hidden md:block'/>
          </div>
          
        </div>
        <img src={about} alt='arrow' className='sm:max-w-[520px] h-[520px] mt-16 mb-10 md:mb-0'/>
      </div>

      <div className='flex flex-col justify-evenly items-center flex-1 z-10'>
        <p className='hidden md:block text-[white] h-[228px] overflow-auto'>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        <div className='flex flex-col items-start'>
          <h1 className='hidden md:block text-[36px] font-extrabold text-[white]'>ABOUT</h1>
          <p className='hidden md:block text-[36px] text-[white] mb-16'>HYDRA VR</p>
          <p className='text-[white] h-[228px] overflow-auto'>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</p>
          <button className='mx-auto w-[250px] md:mx-0 mt-5 font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>LET’S GET IN TOUCH</button>
        </div>
      </div>
      <img src={line} alt='line' className='absolute top-[50%] translate-y-[-50%]'/>
      <img src={line2} alt='line' className='absolute top-[90%] translate-y-[-50%]'/>
    </section>
  )
}
