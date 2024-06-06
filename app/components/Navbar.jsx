
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../style" 
import { navLinks } from '../constants';
import { neddie, logo, menu, close } from "../assets";
import Image from 'next/image';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true)
  const [scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const scrollTop = window.scrollY;
      if(scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
        ${styles.paddingX}
         w-full
        flex
        items-center
        py-5
        fixed
        top-0
        z-20
        bg-primary
    `}>
        <div className='
            w-full
            flex
            justify-between
            items-center
            max-w-7xl
            mx-auto
        '>
            <Link
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive("")
                window.scrollTo(0, 0);
              }}
              
            >
                <Image src={neddie || logo} alt='logo' 
                className='w-9 h-9 object-contain' 
                />
                <p className='text-white text-[18px] flex transition hover:text-secondary font-bold cursor-pointer'>Chinaka &nbsp; <span>| Chinedu</span></p>
            </Link>
            <ul className='list-none hidden  sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                  <li key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                  >
                      <a href={`#${link.id}`}>{link.title}</a> 
                  </li>
                ))}
                <a href="/mycv.pdf"  className="bg-[#915eff] p-2 font-semibold items-center rounded-md" download>Download CV</a>
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <Image 
                    src={toggle ? menu : close}
                    alt='menu'
                    title='toggle'
                    className='w-[28px] h-[28px]
                    object-contain cursor-pointer'
                    onClick={() => setToggle(!toggle)}
                  />

                  <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                   <ul className='list-none flex hover:text-white justify-end items-start flex-col gap-4'>
                      {navLinks.map((link) => (
                        <li key={link.id}
                        className={`${active === link.title ? "text-white" : "text-secondary"  } font-poppins font-medium cursor-pointer text-[16px] `}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a> 
                        </li>
                      ))}
                        <a  href="/mycv.pdf" download className="bg-[#915eff] p-2 font-semibold items-center rounded-md">Download CV
                        </a>
                   </ul>
                  </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar