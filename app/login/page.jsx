'use client'
import { useState } from 'react';
import Link from 'next/link';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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

  return (
    <div className='bg-white' style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 className='text-xl mb-2 font-bold text-blue-600'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-500' style={{ padding: '10px 15px' }}><Link href='/Home'>Login</Link></button>
        <p className="mt-4 text-center">
        Don't have an account? <Link href="/register" className="text-blue-600">Register Now</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
