// components/Profile.js
import Link from 'next/link';
import React from 'react';
import { FaUserCircle, FaWallet, FaCashRegister, FaTasks } from 'react-icons/fa'; // Importing icons from react-icons

const Profile = () => {
    // Static data for the profile
    const userData = {
        username: "john_doe",
        userid: "12345",
        رصيد: "1000 IQD", // Balance in Arabic
        name: "John Doe"
    };

    return (
        <div className="container mx-auto mt-4">
            <div className="section-title text-center text-2xl font-bold mb-4 text-blue-600">معلومات المستخدم</div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stats-card bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaUserCircle className="text-4xl text-blue-600 mb-2" />
                    <div className="text-gray-700">اسم المستخدم</div>
                    <div className="font-bold text-gray-900">{userData.username}</div>
                </div>
                <div className="stats-card bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaWallet className="text-4xl text-green-600 mb-2" />
                    <div className="text-gray-700">الرصيد</div>
                    <div className="font-bold text-gray-900">{userData.رصيد}</div>
                </div>
                <div className="stats-card bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaCashRegister className="text-4xl text-yellow-600 mb-2" />
                    <div className="text-gray-700">الإيرادات الإجمالية</div>
                    <div className="font-bold text-gray-900">0 IQD</div>
                </div>
                <div className="stats-card bg-purple-100 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaTasks className="text-4xl text-purple-600 mb-2" />
                    <div className="text-gray-700">المهام</div>
                    <div className="font-bold text-gray-900">قيد التنفيذ</div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="v-subheader text-lg font-semibold text-blue-600">معلومات السجل</div>
                <div className="bg-white rounded-lg shadow-md">
                    <a href="/records/recharge" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-cash-plus mr-2"></i>
                        <div className="v-list-item__title">سجلات الإعادة الشحن</div>
                    </a>
                    <a href="/records/withdraw" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-cash-minus mr-2"></i>
                        <div className="v-list-item__title">سجلات السحب</div>
                    </a>
                    <a href="/records/work" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-cash-fast mr-2"></i>
                        <div className="v-list-item__title">سجلات العمل</div>
                    </a>
                </div>

                <div className="v-subheader text-lg font-semibold text-blue-600 mt-4">الخدمات</div>
                <div className="bg-white rounded-lg shadow-md">
                    <a href="/service/message" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-bell-outline mr-2"></i>
                        <div className="v-list-item__title">إشعارات الرسائل</div>
                    </a>
                    <a href="/service/ask" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-lightbulb-question-outline mr-2"></i>
                        <div className="v-list-item__title">الأسئلة الشائعة</div>
                    </a>
                </div>

                <div className="v-subheader text-lg font-semibold text-blue-600 mt-4">الإعدادات</div>
                <div className="bg-white rounded-lg shadow-md">
                    <a href="/setting/bind" className="v-list-item v-list-item--link p-4 border-b hover:bg-gray-100 flex items-center">
                        <i className="mdi mdi-credit-card-plus-outline mr-2"></i>
                        <div className="v-list-item__title">معلومات الربط</div>
                    </a>
                </div>
                <Link href='/login' className='m-auto'>
                <button type="button" className="my-6 w-[20%] mx-auto bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-300">
                    تسجيل الخروج
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;