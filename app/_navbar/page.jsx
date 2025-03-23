'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logo from '../../public/Booking.png';
import { useIsSignedContext } from '../contexts/isSigned';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { isSigned, setIsSigned } = useIsSignedContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      if (isOpen && sidebar && !sidebar.contains(event.target) && !event.target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close sidebar when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation
  const handleNavigation = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  function handleIsSigned(){
    setIsSigned(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-6">
        <Link href='/offers'>
          <button className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            إنضم إلينا
          </button>
        </Link>
        
        <div className="flex items-center gap-4">
          <button 
            id="menu-toggle"
            onClick={toggleMenu} 
            className="flex items-center justify-center w-10 h-10 text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Image 
            src={logo} 
            alt="workHotel Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Blurred Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - now on the right side */}
      <div 
        id="sidebar"
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white text-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {
          isSigned? <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h2 className="font-semibold text-lg">workHotel</h2>
                <p className="text-sm text-gray-500">ID: 909-57659</p>
              </div>
              <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
            </div>
          </div>
          
          <div className="h-px bg-gray-200 my-4" />
          
          <nav className="mt-6">
            <ul className="space-y-1">
              <li>
                <Link href="/Home" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>الصفحة الرئيسية</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/offers" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>توقيع العقود والانضمام</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/tasks" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>المهام</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/profile" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>المركز الشخصي</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              </li>
              
              <div className="h-px bg-gray-200 my-3" />
              
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>إعادة الشحن</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
                  <span>سحب</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </Link>
              </li>
              
              <div className="h-px bg-gray-200 my-3" />
              
              <li>
                <span onClick={()=>handleIsSigned()}>
                <Link href="#" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-red-50 text-red-600 font-medium transition-colors duration-200">
                  <span >تسجيل الخروج</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </Link>
                </span>
              </li>
            </ul>
          </nav>
        </div> :
        <nav className="mt-6">
        <ul className="space-y-1">
          <li>
            <Link href="/login" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
              <span>تسجيل دخول</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h-6a2 2 0 01-2-2V7a2 2 0 012-2h6m4 4l2-2m-2 2v10a2 2 0 01-2 2h-6m-4 0H5a2 2 0 01-2-2V7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/register" onClick={() => setIsOpen(false)} className="flex justify-end items-center gap-2 px-4 py-3 rounded-md hover:bg-blue-50 text-blue-800 font-medium transition-colors duration-200">
              <span>إنشاء حساب</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h-4m0 0H8m4 0v4m0-4V8m-4 0h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10a2 2 0 012-2m0 0l-2-2m2 2l2-2" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
        }
      </div>
    </header>
  );
};

export default Navbar;