"use client";
import React from "react";
import Image from "next/image";
function Input({ name,placeholder, icon, title, value, onChange }) {
  return (
    <div>
      <div className="absolute ">
        <span
          className="px-2 text-secondry text-[13px] bg-primary w-[24px]
         h-[200px] relative left-10 top-2 "
        >
          {title}
        </span>
      </div>
      <form className="flex flex-col mt-5 w-[100%] text-secondry">
        <input
         name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          className=" placeholder-secondry placeholder-opacity-75 py-3 px-5 bg-primary border  rounded-[50px]"
        />
        <div className="flex justify-end">
          <Image
            width={24}
            height={24}
            className="relative bottom-9 right-4"
            src={icon || ''} 
            alt="username"
          /> 
        </div>
      </form>
    </div>
  );
}

export default Input;
