'use client'
import React from 'react';
import '../../app/globals.css';
import _hotels from '../_hotels/page'

const ServiceComponent = () => {
    // Metrics data
    const metrics = [
        { label: "طلبات الخدمة", value: "983,567", id: "service-requests" },
        { label: "الممارسين", value: "12,789", id: "practitioners" },
        { label: "خدمة الفنادق", value: "2,800", id: "hotel-services" },
        { label: "المنصات الشركة", value: "250", id: "company-platforms" }
    ];

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            {/* Stats Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Performance Metrics</h2>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {metrics.map((metric) => (
                        <div 
                            key={metric.id}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 text-center text-white w-48 py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-600"
                        >
                            <div className="text-lg font-medium mb-1">{metric.label}</div>
                            <div className="text-2xl font-bold">{metric.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <_hotels/>
            
        </section>
    );
};

export default ServiceComponent;