"use client";
import { SearchIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";
function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [query] = useDebounce(search, 500);
  const { data: session } = useSession();

  useEffect(() => {
    if (!query) {
      router.replace(`/search`);
    } else {
      router.replace(`/search?username=${query}`);
    }
  }, [query, router]);
  return (
    <div className="flex flex-row gap-5 rounded-full p-4 border-black border bg-slate-100 text-black">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
