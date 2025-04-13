'use client'
import React from 'react';
import Image from 'next/image';
import tolip from '../../public/288644510.jpg';
import steigenberger from '../../public/368518064.jpg';
import majestic from '../../public/429800849.jpg';
import dora from '../../public/575211995.jpg';
import helnan from '../../public/623562934.jpg';
import bianchi from '../../public/643542502.jpg';
import Ascot from '../../public/Ascot Hotel.jpg';
import Blue from '../../public/Blue Waters Hotel.jpg';
import Marriott from '../../public/Cairo Marriott Hotel & Omar Khayyam Casino.jpg';
import Fairfield from '../../public/Fairfield by Marriott Copenhagen Nordhavn.jpg';
import Fairmont from '../../public/Fairmont Nile City.jpg';
import Meridien from '../../public/Le Meridien Cairo Airport.jpg';
import Passage from '../../public/Le Passage Cairo Hotel & Casino.jpg';
import Novotel from '../../public/Novotel Cairo Airport.jpg';
import Radisson from '../../public/Radisson Blu Hotel, Cairo Heliopolis.jpg';
import '../../app/globals.css';

const hotelsComponent = () => {
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
        { 
            src: Ascot, 
            alt: "Ascot Hotel", 
            name: "Ascot Hotel",
            category: "luxury"
        },
        { 
            src: Blue, 
            alt: "Blue Waters Hotel", 
            name: "Blue Waters Hotel",
            category: "resort"
        },
        { 
            src: Marriott, 
            alt: "Cairo Marriott Hotel & Omar Khayyam Casino", 
            name: "Cairo Marriott Hotel & Omar Khayyam Casino",
            category: "luxury"
        },
        { 
            src: Fairfield, 
            alt: "Fairfield by Marriott Copenhagen Nordhavn", 
            name: "Fairfield by Marriott Copenhagen Nordhavn",
            category: "business"
        },
        { 
            src: Fairmont, 
            alt: "Fairmont Nile City", 
            name: "Fairmont Nile City",
            category: "luxury"
        },
        { 
            src: Meridien, 
            alt: "Le Meridien Cairo Airport", 
            name: "Le Meridien Cairo Airport",
            category: "business"
        },
        { 
            src: Passage, 
            alt: "Le Passage Cairo Hotel & Casino", 
            name: "Le Passage Cairo Hotel & Casino",
            category: "resort"
        },
        { 
            src: Novotel, 
            alt: "Novotel Cairo Airport", 
            name: "Novotel Cairo Airport",
            category: "business"
        },
        { 
            src: Radisson, 
            alt: "Radisson Blu Hotel, Cairo Heliopolis", 
            name: "Radisson Blu Hotel, Cairo Heliopolis",
            category: "luxury"
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
                            <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 h-80"> {/* Set a fixed height */}
                                <div className="relative h-48 overflow-hidden"> {/* Set a fixed height for the image */}
                                    <Image 
                                        src={hotel.src} 
                                        alt={hotel.alt} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
                                        {hotel.category}
                                    </div>
                                </div>
                                <div className="p-6 h-32"> {/* Set a fixed height for the content area */}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        <span className="font-bold text-blue-600">{index + 1}. </span>
                                        {hotel.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">★★★★★</span>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                            View Details
                                        </button>
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

export default hotelsComponent;