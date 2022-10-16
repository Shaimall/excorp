import React from 'react'
import p2hero from '../assets/img/p2hero.png'

const P3hero = () => {
  return (
    <div className="  mx-auto  ">
     <div>
        <img className='object-fit absolute -z-10' src={p2hero} alt="" />
     <div className='container mx-auto text-center pt-24 ml-10'>
        <span className='text-[44px] font-plusb'>Over the years we have worked with<br></br> government, MNCs, SMEs</span>

    </div>
    <div className='container text-center mt-[27.71px] mx-auto ml-10'>
    <span className='font-robor text-[14px]'> Most bookkeeping software is accurate, but hard to use.<br></br> We make the opposite trade-off, and hope you don’t get<br></br> audited.</span>
    </div> 
    </div>

   
       <div className='text-center flex px-[300px] mt-[160px] ml-[30px] '>
       
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1 '>03</p>
							<h4 className=' font-semibold text-xl'>
								Digitalization
							</h4>
	     </div>
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1'>08</p>
							<h4 className=' font-semibold text-xl'>
								Portals
							</h4>
	     </div>
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1'>50</p>
							<h4 className=' font-semibold text-xl'>
								Websites
							</h4>
	     </div>
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1'>02</p>
							<h4 className=' font-semibold text-xl'>
								Apps
							</h4>
	     </div>
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1'>03</p>
							<h4 className=' font-semibold text-xl'>
								Marketing
							</h4>
	     </div>
         <div className='mt-6 p-10 hover:border-2 border-white border-b-blue-800  hover:text-blue-800'>
							<p className=' font-mono mb-1'>08</p>
							<h4 className=' font-semibold text-xl'>
								Creative
							</h4>
	     </div>
    


        </div>

    
    
 </div>
  )
}

export default P3hero