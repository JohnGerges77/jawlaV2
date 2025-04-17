
import React from 'react'
import DescoverBox from '../_components/DescoverBox';
export const metadata={
  title:"Descover", 
 }
function page() {
  return (<div>
 <div className="flex flex-col items-center justify-center  text-white p-1 pb-4">
 
      <h1 className="text-1xl md:text-3xl font-semibold mb-3">Discover New Place</h1>

 
      <div className="w-[50%] relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-3 rounded-full text-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    
      </div>
    </div>
   <div className='bg-secondry '>
  
    <DescoverBox />
    <DescoverBox />
    <DescoverBox />
    <DescoverBox />
    <div className='h-16'>

    </div>
              </div>
  </div>
      );
    };
    
 
  

export default page









