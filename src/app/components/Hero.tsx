import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Roboto } from "next/font/google";
 
function Hero() {
  // const roboto = Roboto({
  //   weight: "400",
  //   subsets: ["latin"],
  // });
  return (
    <main className="flex bg-black h-screen ">
      <div className="pt-24 p-16justify-start text-start absolute left-20 border-white ">
        <p className="text-yellow-200 font-bold text-6xl pt-24 font-mono">
          Welcome to ClickX
        </p>
        <div className="text-start font-mono">
          <h1 className="text-3xl pt-3 text-white">
            like comment and share posts
          </h1>
          <h2 className="text-3xl pt-3 text-white">
            spread ur love into your social life
          </h2>
          <h3 className="text-3xl pt-3 text-white">
            wherever u are, whatever u do.
          </h3>
        </div>

        {/* <p>
            {" "}
            experience decentralised social media on this platform Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quasi, sequi
            architecto? Aut at vitae nam quam atque est quae dignissimos vel
            dolore. Dignissimos quod libero quam hic, voluptatem dolorum
            expedita.
          </p> */}
        <div className="p-5  items-center">
          <div className="bg-black p-2 flex items-center text-white rounded-lg text-2xl justify-center w-fit m-auto">
            <Link href={"/sign-in"}>
              <button className="p-3 bg-violet-700 border-black rounded-md">Get Started </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="text-6xl font-bold text-red-900">This is my app</div> */}
        {/* <div className="bg-black w-[400px] h-[400px]"></div> */}
      </div>
      <div className="flex">
        <Image
          height={600}
          width={600}
          alt="Profile Picture"
          src={"/images/hom.png"}
          className="justify justify-center items-center pt-10 absolute right-5"
        ></Image>
      </div>
    </main>
  );
}

export default Hero;
