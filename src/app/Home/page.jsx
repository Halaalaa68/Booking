'use client'
import React from 'react';
import Image from 'next/image';
import tolip from '../../../public/288644510.jpg';
import steigenberger from '../../../public/368518064.jpg';
import majestic from '../../../public/429800849.jpg';
import dora from '../../../public/575211995.jpg';
import helnan from '../../../public/623562934.jpg';
import bianchi from '../../../public/643542502.jpg';
import '../../app/globals.css';

const ServiceComponent = () => {
    const hotels = [
        { src: tolip, alt: "Tolip Hotel Alexandria", name: "Tolip Hotel Alexandria" },
        { src: steigenberger, alt: "Steigenberger Golf Resort El Gouna", name: "Steigenberger Golf Resort El Gouna" },
        { src: majestic, alt: "majestic view pyramids hotel", name: "majestic view pyramids hotel" },
        { src: helnan, alt: "Al Dora Resort All Inclusive Hotel", name: "Al Dora Resort All Inclusive Hotel" },
        { src: dora, alt: "Helnan Mamoura Hotel & Events Center", name: "Helnan Mamoura Hotel & Events Center" },
        { src: bianchi, alt: "Bianchi Hotel", name: "Bianchi Hotel" },
    ];

    return (
        <div className="p-5 mb-10">
            <div className="flex justify-center space-x-4 mb-8">
                <div className="bg-sky-500 transition-all duration-700 text-center text-white pt-5 pb-5 ps-9 pe-9 hover:bg-sky-700 rounded shadow-lg hover:shadow-xl ">طلبات الخدمة<br />983567</div>
                <div className="bg-sky-500 transition-all duration-700 text-center text-white pt-5 pb-5 ps-9 pe-9 hover:bg-sky-700 rounded shadow-lg hover:shadow-xl">الممارسين<br />12789</div>
                <div className="bg-sky-500 transition-all duration-700 text-center text-white pt-5 pb-5 ps-9 pe-9 hover:bg-sky-700 rounded shadow-lg hover:shadow-xl">خدمة الفنادق<br />2800</div>
                <div className="bg-sky-500 transition-all duration-700 text-center text-white pt-5 pb-5 ps-9 pe-9 hover:bg-sky-700 rounded shadow-lg hover:shadow-xl">المنصات الشركة<br />250</div>
            </div>

            <div className="flex flex-wrap justify-center">
                {hotels.map((hotel, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
                        <div className=" rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 max-h-80">
                            <Image src={hotel.src} alt={hotel.alt} className="w-full h-60 object-cover" />
                            <div className="p-4 bg-gray-100 text-center text-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                                {hotel.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;