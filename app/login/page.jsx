'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useIsSignedContext } from '../contexts/isSigned';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { isSigned, setIsSigned } = useIsSignedContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
      // Redirect or perform other actions
    // } else {
    //   setError('Invalid email or password');
    // }
  };

  function handleIsSigned(){
    setIsSigned(true)
  }

  return (
    <div className='bg-white' style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 className='text-4xl m-auto text-center mb-2 font-bold text-blue-600'>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="text"
            value={''}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='اسم المستخدم/الجوال'
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" onClick={()=>handleIsSigned()} className='bg-blue-600 w-full text-white rounded-md hover:bg-blue-700 transition-all duration-500' style={{ padding: '10px 15px' }}><Link href='/Home'>تسجيل الدخول</Link></button>
        <p className="mt-4 text-center">
        ليس لديك حساب؟ <Link href="/register" className="text-blue-600">إنشاء حساب</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;