'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { routes } from '@/utils/routes';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    setError('');
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.status !== 200) {
      const error = await response.json();
      setError(error);
      return;
    } else {
      router.push(routes.adminPanel);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='flex flex-col items-center mt-128'>
        <div className='flex px-2 py-2 gap-2'>
          <label htmlFor='email'>Email</label>
          <input className='border solid' required type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex px-2 py-2 gap-2'>
          <label htmlFor='password'>Hasło</label>
          <input
            required
            className='border solid field-sizing-content'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className='text-red-500'>{error}</div>}
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded mt-2'>
          {'Zaloguj\r'}
        </button>
      </div>
    </form>
  );
}
