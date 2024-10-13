import { useState } from 'react'
import img from '../../Images/Frame (1).svg'
import img2 from '../../Images/Frame.svg'
import bar from '../../Images/Hamburger-Button.svg'

export default function Navbar() {

    const [btnBar,setBtnBar] = useState(false)

    const openBar = ()=>{
        setBtnBar((e)=> !e)
    }

  return (
    <nav className='flex justify-between text-[white] items-center h-[102px]'>
        <div className='flex gap-2'>
            <img className='w-[102px] h-[102px]' src={img2} alt='logo'/>
            <img src={img} alt='Hydra'/>
        </div>
        <div className='hidden md:flex gap-6'>
            <a className='hover:text-secondary font-extrabold text-[12px]' href='#about'>ABOUT</a>
            <a className='hover:text-secondary font-extrabold text-[12px]' href='#services'>SERVICES</a>
            <a className='hover:text-secondary font-extrabold text-[12px]' href='#technologies'>TECHNOLOGIES</a>
            <a className='hover:text-secondary font-extrabold text-[12px]' href='#how'>HOW TO</a>
        </div>
        <img src={bar} alt='bar' className='md:hidden relative' onClick={openBar}/>
        {btnBar ? <div className='z-[1000] rounded-l-xl flex flex-col gap-2 p-4 duration-500 absolute top-[118px] right-0 bg-radial w-[250px] '>
            <a className=' hover:text-secondary font-extrabold text-[12px]' href='#about'>ABOUT</a>
            <a className=' hover:text-secondary font-extrabold text-[12px]' href='#services'>SERVICES</a>
            <a className=' hover:text-secondary font-extrabold text-[12px]' href='#technologies'>TECHNOLOGIES</a>
            <a className=' hover:text-secondary font-extrabold text-[12px] mb-10' href='#how'>HOW TO</a>
            <button className='font-extrabold text-[12px] py-2 px-4 border-2 rounded-full'>CONTACT US</button>
            <button className='font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>JOIN HYDRA</button>
        </div>: <div className='z-[1000] rounded-l-xl flex flex-col gap-2 p-4 duration-500 absolute top-[-1000px] right-0 bg-primary w-[250px] '>
            <a className=' font-extrabold text-[12px]' href='#about'>ABOUT</a>
            <a className=' font-extrabold text-[12px]' href='#services'>SERVICES</a>
            <a className=' font-extrabold text-[12px]' href='#technologies'>TECHNOLOGIES</a>
            <a className=' font-extrabold text-[12px] mb-10' href='#how'>HOW TO</a>
            <button className='font-extrabold text-[12px] py-2 px-4 border-2 rounded-full'>CONTACT US</button>
            <button className='font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>JOIN HYDRA</button>
        </div>}

        <div className='hidden md:flex gap-2'>
            <button className='font-extrabold text-[12px] py-2 px-4 border-2 rounded-full'>CONTACT US</button>
            <button className='font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full'>JOIN HYDRA</button>
        </div>
    </nav>
  )
}
