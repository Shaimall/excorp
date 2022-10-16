import React from 'react'
import BG from '../img/page1bg.png'
import heroman from '../img/heroman.png'
import heroheart from '../img/heroheart.png'
import heropen from '../img/heropen.png'
import pg1hero from '../img/pg1hero.png'
import Image from 'next/image'

const hero = () => {
  return (
<div className="container mx-auto h-[90vh] ">
    <div className='object-fit absolute -z-10'>
    <Image  src={BG} alt="" />
    </div>
    <div className='container mx-auto text-center pt-24 '>
        <span className='text-[44px] font-plusb'>When <div className='inline-block'> <Image  src={heroman} alt="" /></div> is infused with <div className='inline-block' ><Image src={heropen} alt="" /></div> , you <br></br>get a <img className='inline-block' src={heroheart} alt="" /> product to showcase</span>

    </div>
    <div className='container text-center mt-[27.71px] mx-auto'>
    <span className='font-robor text-[14px]'> Most bookkeeping software is accurate, but hard to use.<br></br> We make the opposite trade-off, and hope you don’t get<br></br> audited.</span>
    </div> 
    <div className='container mt-[10px]'> <div className='relative h-[500px] w-[700px] mx-auto'> <Image src={pg1hero} layout="fill" objectFit='contain' /> </div></div>
 </div>
   
  )
}

export default hero