'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStar, faPen, faTasks, faUser, faWallet, faMoneyBillWave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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

const Tasks = () => {
    const [selectedHotel, setSelectedHotel] = useState('1');
    useEffect(() => {
        const storedHotel = localStorage.getItem('selectedHotel') || '1';
        setSelectedHotel(storedHotel);
    }, []);
    
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

    const currentHotel = hotels[parseInt(selectedHotel) - 1];

    return (
        <div dir="rtl">

            <section className="py-12 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Properties</h2>
                
                {currentHotel && (
                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative">
                            <div className="h-[250px] relative">
                                <Image 
                                    src={currentHotel.src}
                                    alt={currentHotel.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                {currentHotel.category}
                            </span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                <span className="text-blue-600">{selectedHotel}. </span>
                                {currentHotel.name}
                            </h3>
                            <div className="flex justify-center mb-4">
                                <div className="text-yellow-400 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} />
                                    ))}
                                </div>
                            </div>
                            <Link 
                                href="/TaskList"
                                className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                ابدأ الحجز
                            </Link>
                        </div>
                    </div>
                )}
            </section>

            <style jsx global>{`
                body {
                    font-family: 'Tajawal', sans-serif;
                    background-color: #f8f9fa;
                }
            `}</style>
        </div>
    );
};

export default Tasks;