import React from "react";
import NavBar from "../NavBar";
import Wallet from "../Wallet";
import { Link } from "lucide-react";

function page() {
  return (
    <div>
      <NavBar />
      <div>
        <h1>like comment and share posts</h1>
        <h2>spread ur love into your social life</h2>
        <h3>wherever u are, whatever u do.</h3>
      </div>
    
        <div className="bg-black p-2 flex items-center text-white rounded-lg text-2xl justify-center w-fit m-auto">
          <Link href={"/sign-in"}>
            <button>Get Started </button>
          </Link>
        </div>
      
    </div>
  );
}

export default page;
