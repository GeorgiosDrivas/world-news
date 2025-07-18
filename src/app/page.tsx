"use client";
import { handleSearch } from "@/utils/countryCodeGenerator";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  const handleClick = async () => {
    if (searchInput.trim() !== "") {
      const countryCode = await handleSearch({ searchInput });
      if (countryCode) {
        console.log(`Country code for ${searchInput}: ${countryCode}`);
      }
    } else {
      console.log("Please enter a valid search term.");
    }
  };

  return (
    <div
      id="section"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1>Essential news, globally filtered.</h1>
      <div className="relative">
        <input
          name="search"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div id="search-btn">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            version="1.1"
            onClick={handleClick}
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set"
                transform="translate(-256.000000, -1139.000000)"
                fill="#BFD7EA"
              >
                <path
                  d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                  id="search"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
