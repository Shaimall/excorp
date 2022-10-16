import React from 'react'
import insta from '../assets/img/cb.png'
import facebook from '../assets/img/facebook.png'
import inlogo from '../assets/img/inlogo.png'
import twitter from '../assets/img/twitter.png'
import google from '../assets/img/google.png'
import cb from '../assets/img/cb.png'

const Footer = () => {
  return (
    <nav className='pt-[200px]'>
     <div class="border-t-2 border-bcolor mb-9 mx-20"></div>
    <div className=' container flex font-plusr ml-20 justify-between items-center '>
        <ul className='flex items-center gap-4 text-base'>
            <li className='p-[16px] text-[#9BA4B7]'> © 2022, excorp</li>
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

export default Footer