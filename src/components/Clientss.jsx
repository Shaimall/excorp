import React from 'react'
import Image from "next/image"
import tenancy from '../img/tenancy.png'
import maldives from '../img/maldives.png'
import maavehi from '../img/maavehi.png'
import adhadhu from '../img/adhadhu.png'
import hayleys from '../img/hayleys.png'
import environment from '../img/environment.png'

const Clientss = () => {
  return (
    <div>
         <div className='container flex justify-center items-center w-full mt-14 bg-white gap-5 '>
        <Image className='grayscale hover:grayscale-0' src={maavehi} alt="" />
        <Image className='grayscale hover:grayscale-0' src={adhadhu} alt="" />
        <Image className='grayscale hover:grayscale-0' src={maldives} alt="" />
        <Image className='grayscale hover:grayscale-0' src={environment} alt="" />
        <Image className='grayscale hover:grayscale-0' src={tenancy} alt="" />
        <Image className='grayscale hover:grayscale-0' src={hayleys} alt="" />

    </div>
    </div>
  )
}

export default Clientss