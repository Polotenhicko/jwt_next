import { login } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    await login(formData);
    redirect("/");
  };

  return (
    <main>
      <h1>Log in</h1>
      <form action={handleLogin}>
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
