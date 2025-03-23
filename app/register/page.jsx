'use client';
import { useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

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

  return (
    <div className='bg-white' style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 className='text-xl mb-2 font-bold text-blue-600'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className='border rounded-md border-gray-400'
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-500' style={{ padding: '10px 15px' }}>
          <Link href='/Home'>Register</Link>
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link href="/login" className="text-blue-600">Login here</Link>
      </p>
    </div>
  );
};

export default Register;