'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/Booking.png';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between z-50 items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <button onClick={toggleMenu} className="cursor-pointer text-gray-700 text-2xl">
          ☰
        </button>
      </div>
      <Link href='/offers'>
        <button className="bg-blue-500 rounded-sm px-6 py-2 text-xl text-white">
          إنضم إلينا
        </button>
      </Link>
      <div className={`fixed top-0 left-0 h-full w-64 transition-transform duration-500 bg-blue-500 text-white p-4 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center">
          <div>
            <Image src={logo} alt="Logo" width={50} height={50} />
            <h2 className="mt-2">workHotel</h2>
            <p>ID: 909-57659</p>
          </div>
          <button onClick={toggleMenu} className={`relative left-[18%] -top-5 text-gray-700 text-2xl cursor-pointer ${isOpen ? 'block' : 'hidden'}`}>
            ✕
          </button>
        </div>
        <hr className='text-neutral-400'/>
        <nav className="mt-4 z-50 relative">
          <ul>
            <li className="p-2 hover:bg-blue-600 text-lg">
              <Link href={`/`}>
              الصفحة الرئيسية
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-600 text-lg">
              <Link href={`/offers`}>
             توقيع العقود والانضمام
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-600 text-lg">المهام</li>
            <li className="p-2 hover:bg-blue-600 text-lg">المركز الشخصي</li>
            <hr className='text-neutral-400'/>
            <li className="p-2 hover:bg-blue-600 text-lg">إعادة الشحن</li>
            <li className="p-2 hover:bg-blue-600 text-lg">سحب</li>
            <hr className='text-neutral-400'/>
            <li className="p-2 hover:bg-blue-600 text-lg">تسجيل الخروج</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;