"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/LogIn");
  };
  return (
    <Link
     href="/LogIn"
     className="bg-gray-300 text-gray-700 px-4 py-2 rounded-3xl"
   >
    <button
     onClick={isLoggedIn ? handleLogout : () => router.push("/login")}
      className="flex items-center space-x-[1em]"
    >

      {isLoggedIn ? "Sign Out" : "Sign In"}
      
    </button>
      </Link>
  );
};

export default AuthButton;
