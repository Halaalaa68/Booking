'use client'
import React from 'react';
import Image from 'next/image';
import booking from '../../public/Booking.png';
import kayak from '../../public/kayak.png';
import airbnb from '../../public/airbnb.png';

const Offers = () => {
  const offers = [
    {
      title: "Booking",
      description: "The world's largest hotel booking platforms.",
      logo: booking,
      rating: "⭐⭐⭐متطلبات التأهيل:",
      // eligibility: "متطلبات التأهيل",
      limit: "IQD 8000 الحد الأدنى:",
      buttonText: "توقيع",
    },
    {
      title: "Kayak",
      description: "Compare hotel prices and options from multiple websites.",
      logo: kayak,
      rating: "⭐⭐⭐متطلبات التأهيل:",
      limit: "IQD 8000 الحد الأدنى:",
      buttonText: "توقيع",
    },
    {
      title: "Airbnb",
      description: "Airbnb is a platform for accommodation sharing.",
      logo: airbnb,
      rating: "⭐⭐⭐متطلبات التأهيل:",
      limit: "IQD 8000 الحد الأدنى:",
      buttonText: "توقيع",
    },
  ];

  return (
    <div className="p-5 sm:w-[75%] w-[90%] m-auto">
      {offers.map((offer, index) => (
        <div key={index} className="border border-gray-300 rounded-lg my-5 p-5 bg-white flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <Image src={offer.logo} alt={`${offer.title} logo`} width={40} height={40} className="w-12 h-10" />
          </div>
          <p className="my-2 text-gray-600">{offer.description}</p>
          <div className="flex-col items-end justify-end mt-2">
            <div className="text-sm text-gray-800">{offer.rating}</div>
            <div className="text-sm text-gray-800">{offer.limit}</div>
          </div>
          <button className="bg-blue-500 text-white py-2 mt-3 rounded hover:bg-blue-700">
            {offer.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Offers;
