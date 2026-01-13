import { useState } from "react";
import { searchBooks } from "../api/booksApi";

export default function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const data = await searchBooks(query);
    setBooks(data);
  };

  return (
    <>
      <input
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {books.map((b) => (
          <li key={b.id} onClick={() => onSelect(b.id)}>
            {b.title} — {b.author}
          </li>
        ))}
      </ul>
    </>
  );
}
