
import BG from '../assets/img/BG.png'
import Odiapp from '../assets/img/odiapp.png'
import insta from '../assets/img/insta.png'
import twitter from '../assets/img/twitter.png'
import inlogo from '../assets/img/inlogo.png'
import facebook from '../assets/img/facebook.png'

const Cases2 = () => {
  return (
    <div className="container mx-auto h-[90vh]  ">
    
    <img className='object-fit absolute -z-10' src={BG} alt="" />
    <div className='container mx-auto pt-24 ml-[200px]'>
        <span className='text-[16px] font-plusr'> Cases/00021</span>
        <a href='https://maavehi.gov.mv/'>
        <button class="rounded-2xl ml-[1000px] bg-blue-700 text-white w-[88px] h-[30px] text-[12px] font-plussb ">View Online</button>
        </a>
    </div>
    <div className='container mx-auto pt-5 ml-[200px]  '>
        <span className='text-[44px] font-plusb'>Design and Development of Male’ City<br></br> Council Community Digital Portal and<br></br> Internal System Automation</span>
      
    </div>
    <div className='w-[1302px] h-[1330px] bg-white mx-auto rounded-3xl mt-[70.25px] drop-shadow-2xl  '>
      
        <div className='flex ml-[122px] pt-[72px] font-plussb text-[20px]'>
            <p className='mr-[272px]'> Client</p>
            <p className='mr-[176px]'> Date</p>
            <p> Scope</p>
        </div>
        <div className='flex ml-[122px] pt-[22.01px] font-robor text-[14px]'>
            <p className='mr-[182px]'> MALE’ CITY COUNCIL</p>
            <p className='mr-[188px]'> 2022</p>
            <p> Data gathering, Data Analysis, Digital Framework for<br></br> e-government, UI/UX, Development, Integrations.</p>
        </div>
        <div className='border-b-2 border-bcolor pt-[50px] mx-[120px]'></div> 
        <div className='pt-[54.37px] font-plusr text-[18px] ml-[111px] text-casec'>
        Maavehi Portal - is a truly game changer for City Council Administrations and Public Services. Designed and developed based on<br></br> the ideas and led by the examples of digital frameworks followed by leading countries, The portal when fully implemented will<br></br> enable 90% of council services to go online. One of the most important aspect of this portal is amount of time spent on<br></br> analysing years of paperworks within the council to fully understand how we can cut short and convert it into digital forms with<br></br> minimal information to be filled by the applicants. In the coming days we will be adding more features such as e-permits which<br></br> will eliminate traditional permits and wastage of paper, docs verification which will enable verification of the authenticity of<br></br> permits issued by the council. City works Map which will help citizens to get latest updates on roads closed and road works<br></br> within the city. As we move forward, we are also testing on council management portal, helping more tech enabled governance.<br></br> If you’re applying for a Service on Maavehi Portal, you will need to Sign Up and get Verified. You can request for either Identity<br></br> Video Verification or you may choose to visit any of Male’ City offices to get Verified. This is only required Once. more than a<br></br> million drawings and various registries related to Male’ residents will be added to the portal’s database and shared with related<br></br> parties.
        </div>
        <div className='flex'>
        <div className='ml-[111px] mt-[113.26px] mr-5'>
            <img className='w-[258px] h-[183px] rounded-3xl' src={Odiapp} alt="" />
          
            <img className='w-[258px] h-[183px] rounded-3xl mt-5' src={Odiapp} alt="" />

        </div>
        <div className=' mt-[113.26px] '>
        <img className='w-[535px] h-[383px] rounded-3xl mr-5' src={Odiapp} alt="" />

        </div>
        <div className=' mt-[113.26px] '>
            <img className='w-[258px] h-[183px] rounded-3xl' src={Odiapp} alt="" />
          
            <img className='w-[258px] h-[183px] rounded-3xl mt-5' src={Odiapp} alt="" />

        </div>
        </div>

        <div className='flex mx-auto mt-[110px] ml-11 '>
            <img className='ml-[120px] w-[14.25px] h-[26.61px]' src={facebook} alt="" />
            <img className='ml-[300px] w-[14.25px] h-[26.61px]' src={insta} alt="" />
            <img className='ml-[300px] w-[14.25px] h-[26.61px]' src={twitter} alt="" />
            <img className='ml-[300px] w-[14.25px] h-[26.61px]' src={inlogo} alt="" />

        </div>
        
       
        

    </div>
    
 </div>
  )
}

export default Cases2