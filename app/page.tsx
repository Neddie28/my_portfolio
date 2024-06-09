"use client";

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Footer, Feedbacks, Hero, StarsCanvas, Navbar, Tech, Works, ClientOnly } from "./components"; 
import { Suspense } from "react";
import Loading from "./components/Loading";

const  Home = () => {
  if(typeof window == "undefined") return null
  return (
    <ClientOnly>
    <Suspense fallback={<Loading />}>
     <BrowserRouter>
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
      </BrowserRouter>  
    </Suspense>
    </ClientOnly>
  )
}

export default Home;