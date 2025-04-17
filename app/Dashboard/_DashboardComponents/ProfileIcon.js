import React from "react";
import Image from "next/image"; // ✅ استيراد Image من Next.js

function ProfileIcon() {
  return (
    <div className="flex items-center space-x-[1em] w-fit pl-10">
      <Image
        src="/images/user (1).png"
        alt="user"
        width={24} 
        height={24}
        className="h-[1.5em] w-auto"
      />
      <span className="w-[100%] text-[0.9em] text-white font-bold">Jihad Hamdy</span>
    </div>
  );
}

export default ProfileIcon;
