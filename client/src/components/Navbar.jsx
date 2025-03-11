import React, {Fragement , useState} from 'react';
import {Menu, Transition} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {HiMenuAlt3} from "react-icons/hi";
import {AiOutlineClose,AiOutlineLogout} from "react-icons/ai";
import {Link} from "react-router-dom";

const Navbar = () => {
  const user = {};
  const [isOpen,setIsOpen] = useState(false);

  const handleCloseNavbar = () =>{
     setIsOpen((prev)=>!prev);
  }
  return (
    <>
    <div className='relative bg-[#f7fdfd] z-50'>
      <nav className='container mx-auto flex
        items-center justify-between p-5'>
          <div>
          <Link to='' className='text-blue-600 font-bold text-xl'>
           Job<span className='text-[#1677cccb]'>Bridge</span>
          </Link>
          </div>

          <ul className='hidden lg:flex gap-10 text-base'>
            <li>
              <Link to='/'>Find Job</Link>
            </li>
            <li>
              <Link to='/'>Companies</Link>
            </li>
            <li>
              <Link to='/upload-job'>Upload Job</Link>
            </li>
            <li>
              <Link to='/about-us'>About</Link>
            </li>
          </ul>
          

      </nav>
    </div>
    </>
  )
}

export default Navbar;