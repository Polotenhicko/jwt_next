'use client';
import { FetchService } from '@/services/FetchService';

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const email = target.email.value;
    const password = target.password.value;

    const request = new FetchService({
      path: '/api/login',
      body: {
        email,
        password,
      },
      method: 'POST',
    });

    const response = await request.fetch();
    console.log(response);
  };

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
    </main>
  );
}
