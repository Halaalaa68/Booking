'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useIsSignedContext } from '../contexts/isSigned';

const Register = () => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { isSigned, setIsSigned } = useIsSignedContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Replace with your registration logic
    alert('Registration successful!');
    // Redirect or perform other actions
  };

  function handleIsSigned(){
    setIsSigned(true)
  }

  return (
    <div className='bg-white' style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 className='text-4xl text-center mb-2 font-bold text-blue-600'>إنشاء حساب</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='اسم المستخدم'
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <input
            type="mobile"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            placeholder='رقم الجوال'
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='كلمة المرور'
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='تأكيد كلمة المرور'
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" onClick={()=>handleIsSigned()} className='w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-500' style={{ padding: '10px 15px' }}>
          <Link href='/Home'>إنشاء حساب</Link>
        </button>
      </form>
      <p className="mt-4 text-center">
        لديك حساب بالفعل؟ <Link href="/login" className="text-blue-600">تسجيل الدخول</Link>
      </p>
    </div>
  );
};

export default Register;