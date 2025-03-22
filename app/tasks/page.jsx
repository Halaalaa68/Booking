'use client'
import React from 'react';
import Image from 'next/image';
import tolip from '../../public/288644510.jpg';
import steigenberger from '../../public/368518064.jpg';
import majestic from '../../public/429800849.jpg';
import dora from '../../public/575211995.jpg';
import helnan from '../../public/623562934.jpg';
import bianchi from '../../public/643542502.jpg';
import '../../app/globals.css';
import Link from 'next/link';
const tasks = () => {
    const hotels = [
        { 
            src: tolip, 
            alt: "Tolip Hotel Alexandria", 
            name: "Tolip Hotel Alexandria",
            category: "luxury"
        },
        { 
            src: steigenberger, 
            alt: "Steigenberger Golf Resort El Gouna", 
            name: "Steigenberger Golf Resort El Gouna",
            category: "resort"
        },
        { 
            src: majestic, 
            alt: "Majestic View Pyramids Hotel", 
            name: "Majestic View Pyramids Hotel",
            category: "boutique"
        },
        { 
            src: dora, 
            alt: "Al Dora Resort All Inclusive Hotel", 
            name: "Al Dora Resort All Inclusive Hotel",
            category: "resort"
        },
        { 
            src: helnan, 
            alt: "Helnan Mamoura Hotel & Events Center", 
            name: "Helnan Mamoura Hotel & Events Center",
            category: "business"
        },
        { 
            src: bianchi, 
            alt: "Bianchi Hotel", 
            name: "Bianchi Hotel",
            category: "boutique"
        },
    ];


    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            {/* Featured Hotels Section */}
            <div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <Image 
                                        src={hotel.src} 
                                        alt={hotel.alt} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
                                        {hotel.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {hotel.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">★★★★★</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='w-full bg-blue-700 text-white rounded-md p-2 mt-2 hover:bg-blue-800 duration-500 transition-all'><Link href='/TaskList'>ابدأ الحجز</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default tasks;