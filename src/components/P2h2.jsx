import React from 'react'
import paint from '../assets/img/paint.png'
import rocket from '../assets/img/rocket.png'
import brain from '../assets/img/brain.png'

const P2h2 = () => {
  return (
    <div className=' grid grid-cols-3 mt-[240px] gap-10 w-full mx-[80px]'>
        <d className='p-5'>
            <p className='font-plusb text-[21px]'><img className='inline-block mr-5' src={brain} alt="" />Technology</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Local Government Digitalisation</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Website development</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Mobile Applications</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Software support</p>
            
        </d>
        <d className='p-5'>
            <p className='font-plusb text-[21px]'><img className='inline-block mr-5' src={rocket} alt="" />Strategy + Market</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Digital Marketing Strategy</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Influencer + Impact</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Planning & Execution</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Enterprise marketings</p>
            
        </d>
        <d className='p-5 '>
            <p className='font-plusb text-[21px]'><img className='inline-block mr-5' src={paint} alt="" />Technology</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Branding & Corporate Identity</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Video Production</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Motion & Animations</p>
            <p className='ml-[52px] mt-3 font-robor text-[16px]'>Photography</p>
            
        </d>
        

    </div>
  )
}

export default P2h2