import React from 'react'
import logo from '../../Images/Frame.svg'
import facebook from '../../Images/facebook.svg'
import youtube from '../../Images/youtube.svg'
import linkedin from '../../Images/linkedin.svg'
import twitter from '../../Images/twitter.svg'
import pinterest from '../../Images/pinterest.svg'
export default function Footer() {
  return (
    <footer className='mt-20 mb-10'>
        <div className='flex flex-col items-center md:grid md:grid-cols-4 text-[white] gap-8'>
            <img src={logo} alt='logo' className='relative w-[185px]'/>
            <ul className='hidden md:block relative after:absolute after:w-0.5 after:h-[100%] after:bg-secondary after:right-0 after:top-0 before:absolute before:w-0.5 before:h-[100%] before:bg-secondary before:-left-[10%] before:top-0'>
                <li><a href='#about' className='hover:text-secondary text-[16px] font-extrabold'>ABOUT</a></li>
                <li><a href='#services' className='hover:text-secondary text-[16px] font-extrabold'>SERVICES</a></li>
                <li><a href='#technologies' className='hover:text-secondary text-[16px] font-extrabold'>TECHNOLOGIES</a></li>
                <li><a href='#how' className='hover:text-secondary text-[16px] font-extrabold'>HOW TO</a></li>
                <li><a href='#join' className='hover:text-secondary text-[16px] font-extrabold'>JOIN HYDRA</a></li>
            </ul>
            <ul className='hidden md:block relative after:absolute after:w-0.5 after:h-[100%] after:bg-secondary after:right-0 after:top-0'>
                <li><a href='#about' className='hover:text-secondary text-[16px] font-extrabold'>F.A.Q</a></li>
                <li><a href='#services' className='hover:text-secondary text-[16px] font-extrabold'>SITEMAP</a></li>
                <li><a href='#technologies' className='hover:text-secondary text-[16px] font-extrabold'>CONDITIONS</a></li>
                <li><a href='#how' className='hover:text-secondary text-[16px] font-extrabold'>LICENSES</a></li>
            </ul>
            <div className='flex flex-col items-center'>
                <h5 className='text-[16px] font-extrabold'>SOCIALIZE WITH HYDRA</h5>
                <div className='my-5 flex gap-4'>
                    <a href='facebook'><img src={facebook} alt='facebook'/></a>
                    <a href='youtube'><img src={youtube} alt='youtube'/></a>
                    <a href='linkedin'><img src={linkedin} alt='linkedin'/></a>
                    <a href='twitter'><img src={twitter} alt='twitter'/></a>
                    <a href='pinterest'><img src={pinterest} alt='pinterest'/></a>
                </div>
                <button class="font-extrabold text-[12px] py-2 px-4 bg-linearR text-primary rounded-full">BUILD YOUR WORLD</button>
            </div>
        </div>
        <hr className='text-secondary rounded-full w-[80%] m-auto mt-5'/>
        <p className='text-[14px] font-extrabold my-10 text-center text-[white]'>2024 © HYDRA LANDING PAGE - BY AHMED ♠ HANY - ALL RIGHTS RESERVED </p>
    </footer>
  )
}
