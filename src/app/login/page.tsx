'use client';
import { useRouter } from 'next/navigation';
import AuthService from '@/services/AuthService';
import Link from 'next/link';
import inMemoryJWTService from '@/services/TokenService';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [, refresh] = useState({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const email = target.email.value;
    const password = target.password.value;

    const result = await AuthService.signUp({ email, password });

    if (!result) {
      router.push('/');
    }

    refresh({});
  };

  console.log('login', inMemoryJWTService.getToken());

  return (
    <main>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email: </label>
        <input id="email" type="text" />
        <br />
        <label htmlFor="password">password:</label>
        <input id="password" type="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <Link href={'/'}>Main</Link>
      <Link href={'/guard'}>Guard</Link>
    </main>
  );
}
