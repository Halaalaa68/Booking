'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useIsSignedContext } from '../contexts/isSigned';
import Image from 'next/image';
import logo from '../../public/Booking.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { isSigned, setIsSigned } = useIsSignedContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSigned(true);
  };

  return (
    <>
      <header className="p-3 flex justify-between items-center bg-[#0072ff] text-white">
        <Link href="/" className="btn bg-white text-black px-4 py-2 rounded">
        <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Image src={logo} alt="WorkHotel Logo" height="40" />
      </header>

      <div className="max-w-[400px] mx-auto my-20 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl mb-8 text-[#0072ff] text-center font-bold">تسجيل الدخول</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#0072ff]"
              placeholder="اسم المستخدم/الجوال"
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-[#0072ff]"
              placeholder="كلمة المرور"
              required
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-[#0072ff] text-white p-3 rounded hover:bg-[#0056b3] transition-all duration-300"
          >
            <Link href='/'>تسجيل الدخول</Link>
          </button>

          <div className="text-center mt-4">
            <p>
              ليس لديك حساب؟{' '}
              <Link href="/register" className="text-[#0072ff] hover:underline">
                إنشاء حساب
              </Link>
            </p>
          </div>
        </form>
      </div>

      <style jsx global>{`
        body {
          font-family: 'Tajawal', sans-serif;
          background-color: #f8f9fa;
        }
      `}</style>
    </>
  );
};

export default Login;