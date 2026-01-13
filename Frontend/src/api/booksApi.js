export const searchBooks = async (query) => {
  const res = await fetch(`http://localhost:5000/api/books?query=${query}`);
  return res.json();
};

export const getBookDetails = async (id) => {
  const res = await fetch(`http://localhost:5000/api/books/${id}`);
  return res.json();
};
