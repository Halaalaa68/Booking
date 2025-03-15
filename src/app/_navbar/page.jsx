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
    <div className="flex relative z-50 w-full justify-between items-center p-4">
      <div className="flex justify-center items-center gap-4">
      <Image src={logo} alt="Logo" className="ms-6 mt-6" width={50} height={50} />
      <button onClick={toggleMenu} className="cursor-pointer hover:scale-175 transition-all duration-500 pt-2 pb-2 ps-4 pe-4 border border-gray-700 rounded-sm mt-6 relative text-gray-700 scale-150">
        ☰
      </button>
      </div>
      <div className={`fixed top-0 left-0 h-full transition-all duration-500 bg-blue-500 text-white p-4 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <h2 className="mt-2">workHotel</h2>
          <p>ID: 909-57659</p>
        </div>
        <hr className='text-neutral-400'/>
        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-blue-600 text-lg">الصفحة الرئيسية</li>
            <li className="p-2 hover:bg-blue-600 text-lg">توقيع العقود والانضمام</li>
            <li className="p-2 hover:bg-blue-600 text-lg">المهام</li>
            <li className="p-2 hover:bg-blue-600 text-lg">المركز الشخصي</li>
            <hr className='text-neutral-400'/>
            <li className="p-2 hover:bg-blue-600 text-lg">إعادة الشحن</li>
            <li className="p-2 hover:bg-blue-600 text-lg">سحب</li>
            <li className="p-2 hover:bg-red-400 cursor-pointer text-lg" onClick={toggleMenu}>إغلاق</li>
          </ul>
        </nav>
      </div>
        <Link href='/offers' className='cursor-pointer'>
          <button className="justify-self-end me-6 cursor-pointer bg-blue-500 rounded-sm ps-6 pe-6 pt-2 pb-2 text-xl text-white">
        إنضم إلينا
          </button>
        </Link>
    </div>
  );
};

export default Navbar;