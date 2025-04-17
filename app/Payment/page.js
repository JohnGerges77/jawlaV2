'use client'
import React, { useEffect, useState } from "react";
import DetailsImages from "../_components/DetailsImages";
import Link from "next/link";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { getTripById } from "../servicesApi/GetTripById"; // استيراد API


function page() {

  const searchParams = useSearchParams();
  const tripId = searchParams.get("id"); 
  const [trip, setTrip] = useState(null);
  const total = Number(searchParams.get("total")) || 1;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (tripId) {
      getTripById(tripId)
        .then((data) => {
          setTrip(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load trip details.");
          setLoading(false);
        });
    }
  }, [tripId]);
  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  const images = Array.isArray(trip.images) ? trip.images : [];

  return (
    <div className="flex flex-col md:flex-row justify-start items-start min-h-screen bg-primary text-white p-6 md:pr-28">
  <DetailsImages images={images} />

      <div className="w-full md:pl-10 mt-28">
        <div className="relative bottom-12 text-center mr-24 ">
          <h1 className="text-secondry font-semibold text-4xl pb-7 ">
            Payment
          </h1>
          <p className="text-xl">Payment save using your credit card</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/Payment"
            className="flex justify-between items-center sm:w-[60%]  
          bg-secondry backdrop-blur-sm p-2 rounded-2xl mb-10 ml-7"
          >
            <span className="text-black text-2xl font-semibold flex gap-3 pl-20">
              <Image src="/paypal.png" alt="paypal" width={37} height={37} />
              PayPal
            </span>
          </Link>

          <div className="flex items-center justify-between px-5 text-xl font-semibold bg-[#D9D9D9] backdrop-blur-sm  p-3 rounded-lg sm:w-[80%]">
            <span className="text-black text-xl font-semibold flex gap-3 pl-5 items-center">
              <Image src="/gmailImg.png" alt="paypal" width={37} height={37} />
              Jawla@gmail.com
            </span>
          </div>

          <div className="flex items-center justify-between px-5 text-xl font-semibold bg-[#D9D9D9]  backdrop-blur-sm  p-3 rounded-lg sm:w-[80%] ">
            <div className="flex">
              <span className="text-black">{total}</span>
            </div>
            
          </div>

          <div className="bg-[#FFFFFF70] sm:w-[50%] h-[2px] mt-3 ml-24"></div>
          <Link
            href="/Congratation"
            className="flex justify-center items-center sm:w-[80%]  
          bg-secondry backdrop-blur-sm p-2 rounded-lg mt-7"
          >
            <span className="text-black text-2xl flex gap-3 font-thin">
              Confirm Payment
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
