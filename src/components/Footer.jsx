import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gp-14 my-10 mt-40 text-sm'>
            {/*----Left Section-----*/}
            <div>
                <img className='mb-4 w-60' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/*----Center Section-----*/}
            <div className='mt-6'>
                <p className='text-xl font-medium mb-4'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'> 
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/*----Right Section-----*/}
            <div className='mt-6'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 8688590166</li>
                    <li>CureNest@gmail.com</li>
                </ul>

            </div>
        </div>
        {/*----Copyright Text----*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 CureNest - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer