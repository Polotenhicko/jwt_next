import { redirect } from "next/navigation";

export default function Home() {
  const isAuthorized = null;

  if (!isAuthorized) {
    redirect("/login");
  }

  return <main>Secret page</main>;
}
