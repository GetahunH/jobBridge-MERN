import {FaFacebookF,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {FiInstagram} from "react-icons/fi";
import React from 'react'
import { Link } from 'react-router-dom';
import { footerLinks } from '../utils/data';

const Footer = () => {
  return (
    <footer className='text-white mp-20'>
      <div className='overflow-x-hidden -mb-0.5'>
      <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>

      <div className='bg-[#1d4ed8]'>
         <div className='container px-5 py-20 mx-auto'>
          <div className='w-full flex flex-wrap gap-10
          justify-between -mb-10 -px-4'>
          {footerLinks.map(({id,title,links})=>(
            <div className='w-auto px-4' key={id}>
              <h2 className='font-medium text-white
              tracking-widest text-sm mb-3'>
                {title}
              </h2>

              <div className='mb-10 flex flex-col gap-3'
              >
                {links.map((link,index)=>(
                  <Link 
                  to='/'
                  key={index}
                  className='text-gray-300 text-sm 
                  hover:text-white' 
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          </div>

         </div>
      </div>
        

    </footer>
  )
}

export default Footer;