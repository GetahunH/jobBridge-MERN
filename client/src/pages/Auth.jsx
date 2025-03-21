import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Office } from '../assets';
import { SignUp } from '../components';



const Auth = () => {
  const {user} = useSelector((state) => state.user);
  const [open,setOpen] = useState(true);
  const location = useLocation();


  let from = location?.state?.from?.pathname || '/';

  if(user.token){
    return window.location.replace(from);
  }

  return  (
    <div className="w-full flex flex-col items-center">
    <img 
      src={Office} 
      alt="office" 
      className="w-full max-w-[600px] h-auto object-cover md:max-w-[800px] lg:max-w-[1000px]" 
    />
    <SignUp open={open} setOpen={setOpen} />
  </div>
  
  )
  
};

export default Auth