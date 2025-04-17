'use client';
import React, { useEffect, useState } from 'react';
import { getProfile } from '../servicesApi/ProfileApi'; // ✅ استيراد API

function PersonalInfo() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading profile...</p>;
  }

  if (!userData) {
    return <p className="text-red-500 text-center">Failed to load profile data.</p>;
  }

  return (
    <div className='w-[75%] mx-auto mt-[2em] h-fit px-[1em] py-[1em] bg-gradient-to-r from-[#FFFFFF40] to-[#FFFFFF1A] rounded-[1em]'>
      <div className='flex items-center space-between w-[100%] h-fit'>
        <nav className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-[1em] w-[75%]'>
          
            <h3 className='text-[1.3em] text-white'>Personal Information</h3>
          </div>
          <a href="/Settings">
            <button>
              <img src='/settings.png' alt="settings" className="h-[1.5em]" />
            </button>
          </a>
        </nav>
      </div>
      <ul className='mt-[1em] space-y-[0.5em] text-white w-[100%] px-[1em]'>
        <li className='py-[0.5em]'>
          <span className='text-white text-[1.1em] font-bold'>Name: </span>
          <span className='text-gray-400 text-[1.1em]'>{userData.username}</span>
        </li>
        <hr className='text-gray-400' />
        <li className='py-[0.5em]'>
          <span className='text-white text-[1.1em] font-bold'>Email: </span>
          <span className='text-gray-400 text-[1.1em]'>{userData.email || 'Unknown'}</span>
        </li>
        <hr className='text-gray-400' />
        <li className='py-[0.5em]'>
          <span className='text-white text-[1.1em] font-bold'>ID: </span>
          <span className='text-gray-400'>{userData.id || 'N/A'}</span>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
