import React from 'react'
import Image from "next/image"
import excorp from '../img/excrop.png'
import insta from '../img/cb.png'
import facebook from '../img/facebook.png'
import inlogo from '../img/inlogo.png'
import twitter from '../img/twitter.png'
import google from '../img/google.png'
import cb from '../img/cb.png'

const Navbar = () => {
  return (
    <nav className='absolute w-full  z-10'>
    <div className=' container flex justify-between font-plusr mt-5 ab  '>
    <div className='h-12 w-12 ml-[80px] mt-1 '>
    <a href='/'><Image  src={excorp} alt="" /></a>
    </div>
      
      
        <ul className=' gap-4 text-base  flex items-center -ml-[400px]'>
            <li className='p-[7px]  hover:bg-hovc rounded-lg hover:font-plusb'>
              
            </li>
            <li className='p-[7px]  hover:bg-hovc  rounded-lg hover:font-plusb'>
               <a href='/focus'> Focus </a> 
            </li>
            <li className='p-[7px]  hover:bg-hovc  rounded-lg hover:font-plusb'>
            <a href='/cases'> Cases </a>
            </li>
            <li className='p-[7px]  hover:bg-hovc  rounded-lg hover:font-plusb'> 
            <a href='/'> Reach </a> 
            </li>
            <li className='p-[7px]  hover:bg-hovc  rounded-lg hover:font-plusb'> 
            <a href='/clients'> Clients </a> 
            </li>
            
        </ul>
 
        <ul className=' flex items-center '>
            <li className='text-sm text-[#9BA4B7]'>Learn about us</li>
            <div className='p-5'>
            <Image  src={cb} alt="" />
            </div>
            <a href='https://www.facebook.com/excorpmv/'>
              <div className='p-5'>
            <Image src={facebook} alt="" />
            </div>
            </a>
            <a href='https://www.instagram.com/excorpmv/'>
              <div  className='p-5' >
            <Image src={insta} alt="" />
            </div>
            </a>
            <a href='https://twitter.com/excorpmv'>
              <div className='p-5'>
            <Image  src={twitter} alt="" /> 
            </div>
            </a>
            <a href='https://mv.linkedin.com/company/excorpmaldives'>
              <div className='p-5'>
            <Image  src={inlogo} alt="" />
            </div>
            </a>
            <a href='https://excorp.mv/'>
              <div className='p-5'>
            <Image  src={google} alt="" />
            </div>
            </a>
        </ul>
        
    </div>
    </nav>
    
  )
}

export default Navbar
