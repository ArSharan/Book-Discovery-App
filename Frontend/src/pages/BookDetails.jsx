import { useEffect, useState } from "react";
import { getBookDetails } from "../api/booksApi";

export default function BookDetails({ id, onBack }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookDetails(id).then(setBook);
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <>
      <button onClick={onBack}>⬅ Back</button>
      <h3>{book.title}</h3>
      <p>{book.description}</p>
    </>
  );
}
