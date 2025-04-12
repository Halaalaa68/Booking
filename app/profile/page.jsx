// components/Profile.js
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserCircle, FaWallet, FaCashRegister, FaTasks } from 'react-icons/fa';

const Profile = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    // Static user data
    const userData = {
        name: "WorkHotel",
        userId: "909-57659",
        balance: "1000",
    };

    return (
        <div dir="rtl">

            {/* Main Content */}
            <div className="main-container">
                <div className="section-title">معلومات المستخدم</div>

                <div className="stats-grid">
                    <div className="stats-card hover:scale-105 transition-all duration-500 shadow-indigo-500 shadow-inner">
                        <i className="fas fa-user-circle icon"></i>
                        <div className="label">اسم المستخدم</div>
                        <div className="value">{userData.name}</div>
                    </div>
                    <div className="stats-card hover:scale-105 transition-all duration-500 shadow-indigo-500 shadow-inner">
                        <i className="fas fa-wallet icon"></i>
                        <div className="label">الرصيد</div>
                        <div className="value">{userData.balance} IQD</div>
                    </div>
                    <div className="stats-card hover:scale-105 transition-all duration-500 shadow-indigo-500 shadow-inner">
                        <i className="fas fa-cash-register icon"></i>
                        <div className="label">الإيرادات الإجمالية</div>
                        <div className="value">0 IQD</div>
                    </div>
                    <div className="stats-card hover:scale-105 transition-all duration-500 shadow-indigo-500 shadow-inner">
                        <i className="fas fa-tasks icon"></i>
                        <div className="label">المهام</div>
                        <div className="value">قيد التنفيذ</div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">معلومات السجل</div>
                    <div>
                        <Link href="/records/recharge" className="list-item">
                            <div className="item-content">سجلات الإعادة الشحن</div>
                        </Link>
                        <Link href="/records/withdraw" className="list-item">
                            <div className="item-content">سجلات السحب</div>
                        </Link>
                        <Link href="/records/work" className="list-item">
                            <div className="item-content">سجلات العمل</div>
                        </Link>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">الخدمات</div>
                    <div>
                        <Link href="/service/message" className="list-item">
                            <div className="item-content">إشعارات الرسائل</div>
                        </Link>
                        <Link href="/service/ask" className="list-item">
                            <div className="item-content">الأسئلة الشائعة</div>
                        </Link>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">الإعدادات</div>
                    <div>
                        <Link href="/setting/bind" className="list-item">
                            <div className="item-content">معلومات الربط</div>
                        </Link>
                    </div>
                </div>

                <Link href="/login">
                    <button className="logout-button">تسجيل الخروج</button>
                </Link>
            </div>

            <style jsx>{`
                .header {
                    background-color: #0072ff;
                    color: white;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .menu-toggle {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                .side-menu {
                    position: fixed;
                    top: 0;
                    right: -280px;
                    width: 280px;
                    height: 100vh;
                    background: white;
                    transition: 0.3s;
                    z-index: 1000;
                    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
                }

                .side-menu.open {
                    right: 0;
                }

                .main-container {
                    padding: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #333;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .stats-card {
                    background: #00c0ff;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .stats-card .icon {
                    font-size: 2rem;
                    color: white;
                    margin-bottom: 10px;
                }

                .stats-card .label {
                    color: white;
                    margin-bottom: 5px;
                }

                .stats-card .value {
                    font-weight: bold;
                    color: white;
                }

                .section {
                    margin-bottom: 30px;
                }

                .section-header {
                    font-size: 1.2rem;
                    color: #0072ff;
                    margin-bottom: 15px;
                }

                .list-container {
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .list-item {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    border-bottom: 1px solid #eee;
                    color: #333;
                    text-decoration: none;
                }

                .list-item:last-child {
                    border-bottom: none;
                }

                .list-item:hover {
                    background: #f5f5f5;
                }

                .icon-wrapper {
                    width: 40px;
                    text-align: center;
                    margin-right: 15px;
                }

                .logout-button {
                    display: block;
                    width: 200px;
                    margin: 30px auto;
                    padding: 12px;
                    background: #f5f5f5;
                    border: none;
                    border-radius: 4px;
                    color: #333;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .logout-button:hover {
                    background: #e0e0e0;
                }

                @media (max-width: 768px) {
                    .stats-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Profile;