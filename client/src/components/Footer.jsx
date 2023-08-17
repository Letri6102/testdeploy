import React from 'react'
import { emtu, payment } from '../assets/index'
import { BsPaypal, BsPersonFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7 ml-5'>
                <img className='w-32 ' src={emtu} alt=''/>
                <img className='w-32 ' src={payment} alt=''/>

            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>An Duong Vuong, Q5, TPHCM</p>
                    <p>Mobile: 09090909</p>
                    <p>Phone: 09090909</p>
                    <p>Email: HoangTu69@gmail.com</p>
                </div>
            </div>
       
            <div >
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-2 text-base'>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>my account</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>check out</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>order tracking</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span>help & support</p>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='font-semibold text-xl text-white '>Sign up to receive email notifications</h2>
                <NavLink className='flex justify-center text-sm border text-white border-t-1 hover:bg-gray-900 active:bg-white active:text-black mr-[55px]' to={"/subcribe"}>
                    <button >Subscribe</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Footer