import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "../components/Searchbar";
import Leftsidebar from "../components/leftSidebar";
import Navvbar from "../components/navvbar";
import Navbar2 from "../components/Navbar2";

async function SearchPage({
  searchParams,
}: {
  searchParams: { username?: string };
}) {
  const searchQuerry = searchParams.username ?? "";
  const users = await db.user.findMany({
    where: {
      AND: [
        {
          username: {
            contains: searchQuerry as string,
          },
        },
      ],
    },
  });
  return (
    <>
      <Navbar2 />
      <main className="flex flex-col justify-center lg:px-36 items-center min-h-screen bg-black">
        {/* <Searchbar /> */}
        {users ? (
          users.map((user) => (
            <div
              key={user.id}
              className="border p-4 my-4 bg-white text-black rounded-lg"
            >
              <Link href={`/main/users/${user.username}`}>
                <div className="flex items-center mb-2 flex-row gap-3">
                  <Image
                    src={user.image || "default-avatar.jpg"}
                    alt={user.name || "User Avatar"}
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold">
                      {user.name || "No Name"}
                    </h2>
                    <p className="text-gray-500">
                      @{user.username || "No Username"}
                    </p>
                  </div>
                </div>
                <div>
                  <p>Email: {user.email || "No Email"}</p>

                  <p>Address: {user.address}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-bold mt-4">User not found</h1>
        )}
        <Leftsidebar />
      </main>
    </>
  );
}

export default SearchPage;
