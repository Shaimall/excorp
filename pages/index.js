import React from 'react'
import Navbar from '../src/components/Navbar';
 import Hero from "../src/components/Hero";
 import Clients from "../src/components/Clients"
// import Oty from "../components/Oty"
 import Anim from "../src/components/Anim"
// import Rev from "../components/Rev"
import Clientss from "../src/components/Clientss";
// import Footer from "../components/Footer"



export default function Home() {
  return (
<div>
   <Navbar />
    <Hero/> 
    <Clients/>
    {/* <Oty/>  */}
    <Anim/>  
     {/* <Rev/>   */}
    <Clientss/>    
    {/* <Footer/>  */}

</div>

  );
}

