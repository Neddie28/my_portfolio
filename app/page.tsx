"use client";

import { About, Contact, Experience, Footer, Feedbacks, Hero, StarsCanvas, Navbar, Tech, Works } from "./components"; 

const  Home = () => {
  return (
        <div className='relative  z-0  bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero />
          </div>
          <div className="h-[75px]  mt-28 mx-auto"/>
          <div className="flex">
            <About />
          </div>
          
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
          </div>
          <Footer />
        </div>
  )
}

export default Home;
