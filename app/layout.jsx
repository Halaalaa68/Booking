'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './_navbar/page';
import '../globals.css';
import { MyProvider } from './contexts/signing';
import { IsSignedProvider } from './contexts/isSigned';

const RootLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <IsSignedProvider>
    <MyProvider>
    <html lang="ar" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WorkHotel</title>
      </head>
      <body className="relative min-h-screen flex flex-col text-black">
        {/* Conditionally render the Navbar based on the current route */}
        {pathname !== '/login' && pathname !== '/register'? <Navbar /> : null}
        <header className="text-2xl md:text-4xl mt-6 p-5 text-center text-black">
          <h1 className="font-bold">منصة خدمات متكاملة عبر الإنترنت</h1>
          <p className="text-sm md:text-base">
            نحن نقدم حلاً كاملاً لأعمال الفنادق، بهدف تحسين الأداء وتقديم العملاء...
          </p>
        </header>
        <main className="flex-1 p-5">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gray-200" />
            <div className="absolute inset-0 bg-gradient-radial from-pink-200/10 via-blue-200/10 to-green-200/10 blur-[40px]" />
          </div>
          <div className="relative">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-white p-2.5 text-center">
          جميع الحقوق محفوظة © WorkHotel 2025
        </footer>
      </body>
    </html>
    </MyProvider>
    </IsSignedProvider>
  );
};

export default RootLayout;