import React, { useState } from "react";
import "tailwindcss/tailwind.css";

interface Props {
  onSearch: (query: string) => void; // Specify the type of onSearch function
}

const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>(""); // Specify type string for query

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Specify type React.ChangeEvent<HTMLInputElement> for e
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Specify type React.FormEvent<HTMLFormElement> for e
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <div className="text-center">
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search YouTube"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
