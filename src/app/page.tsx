"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      id="section"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1>Essential news, globally filtered.</h1>
      <div className="relative">
        <input name="search" type="text" placeholder="Search..." />
        <div id="search-btn">
          <Image src="/search.svg" alt="Search icon" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
