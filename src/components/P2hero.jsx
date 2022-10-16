import React from 'react'

import heroman from '../assets/img/heroman.png'
import heroheart from '../assets/img/heroheart.png'
import heropen from '../assets/img/heropen.png'
import p2hero from '../assets/img/p2hero.png'

const P2hero = () => {
  return (
    <div className="container mx-auto h-[50vh] ">
    <div>
        <img className='object-fit absolute -z-10' src={p2hero} alt="" />
    <div className='container mx-auto text-center pt-24 '>
        <span className='text-[44px] font-plusb'>When <img className='inline-block' src={heroman} alt="" /> is infused with <img className='inline-block' src={heropen} alt="" /> , you <br></br>get a <img className='inline-block' src={heroheart} alt="" /> product to showcase</span>

    </div>
    <div className='container text-center mt-[27.71px] mx-auto'>
    <span className='font-robor text-[14px]'> Most bookkeeping software is accurate, but hard to use.<br></br> We make the opposite trade-off, and hope you don’t get<br></br> audited.</span>
    </div> 
    </div>
 </div>
   
  )
}

export default P2hero