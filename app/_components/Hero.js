"use client";
import Image from "next/image";


import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function Hero() {
  const router = useRouter();

  // const isAuthenticated = () => {

  //   return !!localStorage.getItem('token'); 
  // };

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     router.push('LogIn'); 
  //   }
  // }, [router]);


  return (
    <div className="h-[100vh] w-[100%] object-cover  mt-10 flex justify-center">
      <Image
        src="/hero.jpg"
        fill
        quality={100}
        alt="hero"
        className="absolute top-10 -z-30 opacity-80"
      />
       <div className="relative left-[30%]">
          <Image width={468} height={190} src="/Frame 19.png" alt="logo" />
      </div>
    </div>
  );
}

export default Hero;
