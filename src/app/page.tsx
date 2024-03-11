import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default async function Home() {
  const user = await getServerSession(authOptions);
  const userName = user?.user.name;
  const username = user?.user.username;
  return (
    <>
      <main className="flex flex-col p-2 justify-between">
        <NavBar />
        <Hero />
        {/* <div>
          hello
          {userName} 
          {username}
        </div> */}
      </main>
    </>
  );
}
