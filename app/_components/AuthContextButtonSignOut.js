"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
function AuthContextButtonSignOut() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
  {!isLoggedIn ?
    <div className="bg-[#F2CD7E] text-black px-4 py-2 rounded-3xl">
     <Link href="Registration">Sign up</Link> 
    </div>: ""}
    </div>
  );
}

export default AuthContextButtonSignOut;
