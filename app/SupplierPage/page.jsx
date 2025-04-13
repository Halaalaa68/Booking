'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import all images
import logo from '../../public/Booking.png';
import hotel1 from '../../public/288644510.jpg';
import hotel2 from '../../public/368518064.jpg';
import hotel3 from '../../public/429800849.jpg';
import hotel4 from '../../public/575211995.jpg';
import hotel5 from '../../public/623562934.jpg';
import hotel6 from '../../public/643542502.jpg';

// Partner images
import kayakLogo from '../../public/kayak.png';
import pricelineLogo from '../../public/priceline.webp';
import agodaLogo from '../../public/agoda.png';
import bookingLogo from '../../public/Booking.png';

const SupplierPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem('login') === null) {
            localStorage.setItem('login', 'false');
        }
        const loginStatus = localStorage.getItem('login') === 'true';
        setIsLoggedIn(loginStatus);
    }, []);


    const hotels = [
        { name: 'Tolip Hotel Alexandria', image: hotel1 },
        { name: 'Steigenberger Golf Resort El Gouna', image: hotel2 },
        { name: 'Majestic View Pyramids Hotel', image: hotel3 },
        { name: 'Al Dora Resort All Inclusive Hotel', image: hotel4 },
        { name: 'Helnan Mamoura Hotel & Events Center', image: hotel5 },
        { name: 'Bianchi Hotel', image: hotel6 },
    ];

    const partners = [
        {
            name: 'Kayak',
            description: 'Kayak is a travel search engine that compares hotel prices and options from multiple websites.',
            image: kayakLogo
        },
        {
            name: 'Priceline',
            description: 'Priceline allows you to book hotels through a bidding process to secure better rates.',
            image: pricelineLogo
        },
        {
            name: 'Agoda',
            description: 'Agoda primarily focuses on hotel bookings in the Asian region, but also offers a global selection.',
            image: agodaLogo
        },
        {
            name: 'Booking',
            description: 'The world\'s largest hotel booking platform, offering a wide range of hotel options and user reviews.',
            image: bookingLogo,
            style: { height: '60px', width: '80px' }
        }
    ];

    const menuItems = [
        { href: '/', text: 'الصفحة الرئيسية', icon: 'mdi-home-minus-outline' },
        { href: '/offers', text: 'توقيع العقود والانضمام', icon: 'mdi-order-bool-ascending-variant' },
        { href: '/tasks', text: 'المهام', icon: 'mdi-account-hard-hat-outline' },
        { href: '/profile', text: 'المركز الشخصي', icon: 'mdi-account-circle-outline' },
        { href: '/', text: 'إعادة الشحن', icon: 'mdi-bank-plus' },
        { href: '/', text: 'سحب', icon: 'mdi-bank-minus' }
    ];

    return (
        <div className="w-full">

            {/* Main Content */}
            <div className="bg-[#0074fe] pt-20 pb-16 rounded-br-[200px]">
                <div className="container mx-auto w-3/4">
                    <h1 className="text-4xl mb-4 text-gray-200 text-center">Supplier</h1>
                    <p className="text-lg mb-8 text-gray-200 text-center">
                        Integrated Online Service Platform
                    </p>
                    <p className="text-gray-300 mb-8 text-center">
                        We provide mature business solutions aimed at improving hotel performance 
                        and customer reviews. We have established close partnerships with numerous 
                        partners and offline practitioners to create unique value together.
                    </p>

                    <div className="flex justify-between gap-x-6 md:gap-0 md:text-sm text-[10px] px-12">
                        <div>
                            <p className="text-[#003832] text-center"><em>Partner Platforms</em></p>
                            <p className="text-[#003832] text-center">250</p>
                            <p className="text-[#003832] text-center"><em>Practitioners</em></p>
                            <p className="text-[#003832] text-center">12789</p>
                        </div>
                        <div>
                            <p className="text-[#003832] text-center"><em>Service Hotels</em></p>
                            <p className="text-[#003832] text-center">2800</p>
                            <p className="text-[#003832] text-center"><em>Service Orders</em></p>
                            <p className="text-[#003832] text-center">983567</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Button */}
            {!isLoggedIn && (
                <Link 
                    href="/login" 
                    className="bg-[#d81b60] text-white text-sm md:text-base rounded-full py-3 px-12 mx-auto block w-2/3 text-center mt-8 hover:bg-[#c41854] transition-colors"
                >
                    JOIN AS A PRACTITIONER
                </Link>
            )}

            {/* Partners Section */}
            <div className="container mx-auto w-2/3 my-16">
                <h3 className="text-2xl mb-8">Recommended Partners</h3>
                {partners.map((partner) => (
                    <div key={partner.name} className="flex items-center md:gap-8 gap-4 mb-8">
                        <div className="md:w-1/2">
                            <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                            <p className="text-gray-600">{partner.description}</p>
                        </div>
                        <div className="md:w-1/2 w-[150%] flex justify-center">
                            <Image 
                                src={partner.image}
                                alt={`${partner.name} Logo`}
                                width={100}
                                height={100}
                                className="rounded-full"
                                style={partner.style}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Hotels Section */}
            <div className="container mx-auto w-2/3 my-16">
                <h3 className="text-2xl mb-8">Popular Hotels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hotels.map((hotel) => (
                        <div key={hotel.name} className="space-y-2">
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={hotel.image}
                                    alt={hotel.name}
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                            <p className="text-lg">{hotel.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="container mx-auto px-4 flex justify-between items-center py-8">
                {partners.map((partner) => (
                    <Image 
                        key={partner.name}
                        src={partner.image}
                        alt={`${partner.name} Logo`}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default SupplierPage;