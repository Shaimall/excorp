import React from 'react'
import excorp from '../assets/img/excrop.png'
import insta from '../assets/img/insta.png'
import facebook from '../assets/img/facebook.png'
import inlogo from '../assets/img/inlogo.png'
import twitter from '../assets/img/twitter.png'
import google from '../assets/img/google.png'
import cb from '../assets/img/cb.png'

const Navbar = () => {
  return (
    <nav className='mx-[120px] z-10'>
    <div className=' container flex justify-between font-plusr mt-5 ab  '>
      
       <a href='/'><img className='h-12 w-12 ml-[80px] mt-1 ' src={excorp} alt="" /></a>
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
            <img className='p-5' src={cb} alt="" />
            <a href='https://www.facebook.com/excorpmv/'>
            <img className='p-5' src={facebook} alt="" />
            </a>
            <a href='https://www.instagram.com/excorpmv/'>
            <img className='p-5' src={insta} alt="" />
            </a>
            <a href='https://twitter.com/excorpmv'>
            <img className='p-5' src={twitter} alt="" /> 
            </a>
            <a href='https://mv.linkedin.com/company/excorpmaldives'>
            <img className='p-5' src={inlogo} alt="" />
            </a>
            <a href='https://excorp.mv/'>
            <img className='p-5' src={google} alt="" />
            </a>
        </ul>
        
    </div>
    </nav>
    
  )
}

export default Navbar
