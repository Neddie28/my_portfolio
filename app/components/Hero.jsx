import React from 'react'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'


import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["<Chinedu/>"],
    loop: true,
    delaySpeed:3000,
  })
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`absolute inset-0 flex top-[120px] max-w-7xl mx-auto ${styles.paddingX} 
          flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5 '>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#915eff]'
              >{text}
              </span></h1>
              <p className={` ${styles.heroSubText} mt-2 text-white-100`}>
              A software engineer who builds responsive web applications, <br className='sm:block md:hidden hidden'/>design user interfaces (UIs) that are intuitive and user-friendly, and develop native mobile applications and build Blockchain Infrastructures!
              </p>

            </div>
        </div>  
        <div className="h-[65px]"/>

        <ComputersCanvas />

        <div className='  xs:bottom-10 bottom-32 w-full
            flex justify-center items-center'>
              <a href='#about'>
                <div className='w-[35px] h-[64px]
                  rounded-3xl border-4 border-seondary flex
                  justify-center items-start p-2'>
                      <motion.div
                        animate={{
                          y:[0, 24, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'loop'
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                      >

                      </motion.div>
                </div>
              </a>
        </div>
    </section>
  )
}

export default Hero