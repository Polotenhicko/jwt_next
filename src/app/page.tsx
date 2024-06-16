import { redirect } from 'next/navigation';
import inMemoryJWTService from '@/services/TokenService';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default function Home() {
  const isAuthorized = true;

  console.log(21, inMemoryJWTService.getToken());
  console.log(23, cookies().getAll());

  if (!isAuthorized) {
    redirect('/login');
  }

  return (
    <main>
      <h1>Secret page</h1>
      <Link href={'/login'}>Login</Link>
      <Link href={'/guard'}>Guard</Link>
    </main>
  );
}
