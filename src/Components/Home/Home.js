import React from 'react'
import Hero from '../Hero/Hero'
import Introduction from '../introduction/Introduction'
import WhyBuild from '../whyBuild/WhyBuild'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
export default function Home() {
  return (
    <div className='px-2 md:px-5 lg:px-20 m-auto pt-4'>
        <Hero />
        <Introduction />
        <WhyBuild />
        <Banner/>
        <Contact/>
        <Footer />
    </div>
  )
}
