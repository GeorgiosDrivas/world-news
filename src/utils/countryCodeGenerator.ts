import { handleSearchProps } from "@/types";

export const handleSearch = async ({ searchInput }: handleSearchProps) => {
  if (searchInput.trim() != "") {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchInput}`
    );
    const data = await res.json();
    return data[0].cca2.toLowerCase();
  } else {
    console.log("Please enter a valid search term.");
  }
};
