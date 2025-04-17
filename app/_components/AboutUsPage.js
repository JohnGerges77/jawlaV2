import Image from 'next/image';
import React from 'react';


function AboutUsPage() {
  return (
    <section className='w-full px-[10%] mx-auto h-fit flex items-center justify-between py-[5em]'>
      <div className = "left-side w-[40%] h-full flex items-center justify-center md:w-[80%]">
        <Image src="/Back.png" width={100} height={100}  alt="temple" className='w-[60%] md:w-[50%]'/>
        <Image src="/Front.png" width={100} height={100} alt="temple" className='w-[50%] mt-[10vw] ml-[-5vw] md:w-[40%]'/>
      </div>
      <div className = "right-side w-[50%] h-full flex flex-col space-y-[1em] md:w-[80%] md:mt-[5em] md:mx-auto">
        <h1 className='text-[1em] text-[#F2CD7E] font-bold'> About Us </h1>
        <span className='text-[2em] font-bold text-white max-w-[80%]'>
          Our tour plan is to fulfill your 
          <span className='text-[#F2CD7E] font-bold'> dream wish </span>
        </span>
        <p className='text-[#8d8d8d] max-w-[75%]'>
          Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication.
        </p>
        <div className='w-[100%] h-fit  flex justify-between space-x-[1em]'>
          <div className='w-[25%] h-[10%] flex flex-col space-y-[0.5em] py-[1em] '>
            <h3 className='text-[#F2CD7E] text-[1.5em] font-bold'>15</h3>
            <p className='max-w-[80%]  text-white text-[1em] font-[500]'>Years of Experience</p>
          </div>
          <div className='w-[25%] h-[10%] flex flex-col space-y-[0.5em] py-[1em] '>
            <h3 className='text-[#F2CD7E] text-[1.5em] font-bold'>1K</h3>
            <p className='max-w-[80%]  text-white text-[1em] font-[500]'>Successful Trips</p>
          </div>
          <div className='w-[25%] h-[10%] flex flex-col space-y-[0.5em] py-[1em] '>
            <h3 className='text-[#F2CD7E] text-[1.5em] font-bold'>20K</h3>
            <p className='max-w-[80%]  text-white text-[1em] font-[500]'>Happy Customers</p>
          </div>
          <div className='w-[25%] h-[10%] flex flex-col space-y-[0.5em] py-[1em] '>
            <h3 className='text-[#F2CD7E] text-[1.5em] font-bold'>4.9</h3>
            <p className='max-w-[80%] text-white text-[1em] font-[500]'>Overall Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;


