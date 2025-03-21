import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Office } from '../assets';



const Auth = () => {
  const {user} = useSelector((state) => state.user);
  const [open,setOpen] = useState(false);
  const location = useLocation();


  let from = location?.state?.from?.pathname || '/';

  if(user.token){
    return window.location.replace(from);
  }

  return  (
    <div className='w-full'>
      <img src={Office} alt="office" className='object-container h-150 ml-35 ' />
    </div>
  )
  
};

export default Auth