import React from 'react'
import Image from "next/image";
import tenancy from '../img/tenancy.png'
import maldives from '../img/maldives.png'
import maavehi from '../img/maavehi.png'
import adhadhu from '../img/adhadhu.png'
import hayleys from '../img/hayleys.png'
import environment from '../img/environment.png'
const Clients = () => {
  return (
  
    <div className='container flex justify-center items-center w-full mt-14 bg-white p-9'>
     
         <Image src={maavehi} alt="" />
         <Image src={adhadhu} alt="" />
         <Image src={maldives} alt="" />
         <Image src={environment} alt="" />
         <Image src={tenancy} alt="" />
         <Image src={hayleys} alt="" />

    </div>
   
  )
}

export default Clients