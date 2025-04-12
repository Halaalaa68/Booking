'use client'
import React, { use, useState } from 'react';
import Image from 'next/image';
import booking from '../../public/Booking.png';
import kayak from '../../public/kayak.png';
import airbnb from '../../public/airbnb.png';
import { useSignContext } from '../contexts/signing';
import Link from 'next/link';

const Offers = () => {
  const offers = [
    {
      title: "Booking",
      description: "The world's largest hotel booking platforms.",
      logo: booking,
      rating: 3,
      eligibility: "متطلبات التأهيل",
      minimumAmount: 8000,
      currency: "IQD",
    },
    {
      title: "Kayak",
      description: "Compare hotel prices and options from multiple websites.",
      logo: kayak,
      rating: 3,
      eligibility: "متطلبات التأهيل",
      minimumAmount: 8000,
      currency: "IQD",
    },
    {
      title: "Airbnb",
      description: "Airbnb is a platform for accommodation sharing.",
      logo: airbnb,
      rating: 3,
      eligibility: "متطلبات التأهيل",
      minimumAmount: 8000,
      currency: "IQD",
    },
  ];

  const [loadingIndex, setLoadingIndex] = useState(null); // Track which button is in loading state
  const [signedOffers, setSignedOffers] = useState([]); // Track signed offers
  const { signID, setSignID } = useSignContext();

  const handleSignatureClick = (index) => {
    setSignID(index)
    if (loadingIndex !== null) return; // Prevent clicking if another button is loading

    setLoadingIndex(index); // Set the loading index

    // Simulate a loading process
    setTimeout(() => {
      setLoadingIndex(null); // Reset loading index
      setSignedOffers((prev) => [...prev, index]); // Mark the offer as signed
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-right mb-6">العروض المتاحة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg h-80 shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 p-6" // Added padding here
          >
            <div className="flex items-center justify-between mb-4">
              <Image 
                src={offer.logo} 
                alt={`${offer.title} logo`} 
                width={56} 
                height={56} 
                className="object-contain rounded-md"
              />
              <h3 className="text-xl font-semibold text-right">{offer.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4 text-right">{offer.description}</p>
            
            <div className="border-t border-gray-100 pt-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex">
                  {Array(5).fill().map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={i < offer.rating ? "#FFD700" : "#E2E8F0"} 
                      className="w-4 h-4"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-right font-medium">{offer.eligibility}:</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-semibold text-blue-600">
                  <span>{offer.minimumAmount.toLocaleString()} </span>
                  <span> {offer.currency}</span>
                </p>
                <p className="text-gray-700 text-right font-medium">:الحد الأدنى</p>
              </div>
            </div>
            <Link href='/tasks'>
            <button 
              className={`w-full ${(signID !== -1 && signID !==index) || signedOffers.includes(index) ? 'bg-gray-400' : 'bg-blue-600'} text-white py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              disabled={loadingIndex !== null || signedOffers.includes(index)} // Disable if loading or already signed
              onClick={() => handleSignatureClick(index)}
            >
              {signID==index? 'قم بتكملة توقيعك' : "توقيع"}
            </button>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-xl font-semibold text-right mb-3">معلومات إضافية</h2>
        <p className="text-gray-700 text-right">
          يمكنك الاطلاع على المزيد من التفاصيل حول شروط وأحكام كل عرض بالضغط على زر "توقيع". 
          تختلف المتطلبات حسب العرض وقد تتطلب بعض العروض إثبات الهوية أو معلومات إضافية.
        </p>
      </div>
    </div>
  );
};

export default Offers;