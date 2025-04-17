"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../_components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../servicesApi/loginAPi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);

    try {
      const result = await loginUser(formData);
      console.log(result.role);
      login(result.token, result.role); 

      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        if (result.role === "Admin") {
          router.push("/Dashboard");
        } else {
          router.push("/");
        }
      }, 1500);
    } catch (err) {
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center bg-gray-300 min-h-[89vh]">
      <ToastContainer position="top-center" autoClose={2500} />
      <div className="bg-secondry w-[60%] flex justify-end items-center rounded-xl my-2">
        <div className="w-[35%] p-[20px]">
          <Image width={468} height={190} src="/Frame 19.png" alt="logo" />
        </div>

        <div className="bg-primary w-[65%] pt-28 rounded-xl h-[100%]">
          <div className="flex flex-col justify-center items-center">
            <div className="text-secondry font-bold relative right-14 text-2xl">
              <p>Log in</p>
              <div className="bg-secondry w-[180px] h-[2px] mt-3"></div>
            </div>

            <div className="flex flex-col mt-3 w-[75%]">
              <Input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                icon="/username.png"
                title="User Name"
              />

              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                icon="/eye.png"
                title="Password"
              />

              <div className="text-gray-200 py-4 flex justify-end items-end">
                <Link href="/ForgetPassword">Forgot Password?</Link>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-secondry w-[75%] py-3 px-5 rounded-[50px] font-bold text-xl"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
            <p className="text-gray-200 mt-5">
              Don’t have an account?{" "}
              <Link href="/Registration" className="text-secondry">
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;