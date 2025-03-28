import React, { useState,Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useForm} from "react-hook-form"
import {useLocation} from "react-router-dom"
import { useDispatch } from 'react-redux'
import TextInput from './TextInput'
import CustomButton from './CustomButton'


const SignUp = ({open, setOpen}) => {
    
    const dispatch = useDispatch()
    const location = useLocation()

    const [isRegister,setIsRegister] = useState(true);
    const [accountType, setAccountType] = useState("seeker");

    const [errMsg,setErrMsg] = useState(' ');
    const { 
        register,
        handleSubmit,
        getvalues,
        formState:{errors},
    } = useForm ({
        mode: 'onChange'
    });
    let from = location.state?.from?.pathname || '/';

    const closeModal = () => setOpen(false);
    const onSubmit = () => {};
    
  return  (
    <>
    <Transition appear show={open || false}>
        <Dialog as='div' className="relative" onClose={closeModal}>
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-out duration-300'
                      enterFrom='opacity-0 scale-95'
                      enterTo='opacity-100 scale-100'
                      leave='ease-in duration-200'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title 
                            as='h3'
                            className='text-xl
                            font-semibold lwading-6
                            text-gray-900' 
                            >
                                {isRegister ? "Create Account" : "Account Sign In"}
                            </Dialog.Title>

                            <div className='w-full flex
                            item-center justify-center py-4
                            '>
                                <button 
                                 className={`flex-1 px-4 py-2 rounded text-sm outline-none
                                     ${accountType === 'seeker'
                                    ? "bg-[#1d4fd862] font-semibold text-blue-900"
                                    
                                    :"bg-white border border-blue-400"}
                                    `}
                                    onClick={()=> setAccountType("seeker")}
                                >User Account</button>
                                <button 
                                        className={`flex-1 px-4 py-2 rounded text-sm outline-none font-semibold 
                                            ${accountType !== "seeker" 
                                            ? "bg-[#1d4fd862] text-blue-900" 
                                            : "bg-white border border-blue-400 text-blue-900"}`
                                        } 
                                        onClick={() => setAccountType("company")}
                                        >
                                Company Account
                                </button>


                            </div>

                            <form 
                            className='w-full flex
                            flex-col gap-5'
                            onSubmit={handleSubmit(onSubmit)}
                            >

                                <TextInput
                                    name='email'
                                    label='Email Address'
                                    placeholder='email@example.com'
                                    type='email'
                                    register={register("email",{
                                        required: "Email Address is required!",
                                    })}
                                    error={errors.email ? errors.
                                        email.message : ""}
                                    
                                />
{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                              {isRegister && (
                                <div className='w-full flex
                                gap-1 md:gap-2'>
                                    <div
                                    className={`${
                                        accountType ===
                                        "seeker" ? "w-1/2" :
                                        "w-full"
                                    }`}
                                    >

                                 <TextInput
                                    name={
                                        accountType === 
                                        "seeker" ? 
                                        "firstName" : 'name'
                                    }
                                    label={
                                        accountType === 
                                        "seeker"
                                        ? "First Name"
                                        : " Company Name"
                                    }
                                    placeholder={
                                        accountType === 
                                        "seeker"
                                        ? 'eg. Getahun'
                                        : 'Company name'
                                    }
                                    type='text'
                                    register={register(
                                        accountType ===
                                         "seeker" ?
                                         "firstName" : "name",
                                        {
                                        required: 
                                        accountType === 
                                        "seeker" 
                                        ? "First Name is requiered!"
                                        : "Company Name is required!"
                                    })}
                                    error={
                                        accountType ===
                                        "seeker" 
                                        ? errors.firstName 
                                        ? errors.
                                        firstName?.
                                        message
                                        : ""
                                        :errors.name
                                        ? errors.name?.
                                        message
                                        :""
                                    }
                                    
                                />

                                    </div>

                                    {
                                        accountType ===
                                     "seeker" && isRegister && (
                                        <div className='w-1/2'>
                                            
                                            <TextInput
                                                name='lastName'
                                                label='Last Name'
                                                placeholder='eg.Haftu'
                                                type='text'
                                                register={register("lastName",{
                                                    required: "Last Name is required!",
                                                })}
                                                error={
                                                    errors.lastName ?
                                                    errors.lastName.
                                                    message : ""}
                                                
                                            />
                                        </div>
                                     )
                                    
                                    }

                                  

                                </div>
                              )}
{/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@22 */}
                   
                                <div className='w-full flex
                                gap-1 md:gap-2'>
                                    <div
                                    className={`${
                                        accountType ===
                                        "seeker" ? "w-1/2" :
                                        "w-full"
                                    }`}
                                    >

                                 <TextInput
                                    name='password'
                                    label="Password"
                                    placeholder="Password"
                                    type='password'
                                    register={register
                                        ('password',{
                                            required: 'Password is required!',  
                                    
                                    })}
                                    error={
                                        errors.password ?
                                        errors.password?.
                                        message : ""
                                    }
                                />
                                    </div>

                                    {/* @@@@@@@@@@2 */}
                        {isRegister && (
                                    <div className='w-1/2'>
                                 <TextInput
                                    // name='password'
                                    label="Confirm Password"
                                    placeholder="Password"
                                    type='password'
                                    register={register
                                        ('cpassword',{
                                            required: 'Password is required!',  
                                    
                                    })}
                                    error={
                                        errors.password ?
                                        errors.password?.
                                        message : ""
                                    }
                                    
                                />

                                    </div>

                                  )}

                                </div>
                                
                                {errMsg && (
                                    <span
                                    role ='alert'
                                    className='text-sm
                                    text-red-500 mt-0.5'>
                                    {errMsg}
                                    </span>
                                )}
                              

                              <div className='mt-2'>
                                <CustomButton
                                 type='submit'
                                 containerStyles={
                                    `inline-flex
                                    justify-center rounded-md
                                    bg-blue-600 px-8 py-2
                                    text-sm font-medium
                                    text-white outline-none
                                    hover:bg-blue-800`
                                 }
                                 title={isRegister ?
                                    "Create Account" : "Login Account"
                                 }
                                 />
                                  
                              </div>
                            </form>

                            <div className='mt-4'>
                                <p className='text-sm text-gray-700'>
                                    {isRegister
                                    ?"Already has and account"
                                    : "Do not have an account"}

                                    <span className ='text-sm
                                    text-blue-600 nl-2
                                    hover:text-blue-700
                                    hover:font-semibold
                                    cursor-pointer'
                                    onClick={()=>
                                        setIsRegister((prev) =>
                                        !prev)}
                                    >
                                        {isRegister ? "Login" :
                                        "Create Account"}
                                    </span>
                                </p>
                            </div> 
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
    </>
  )
}


export default SignUp