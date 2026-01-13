const axios = require("axios");

exports.fetchBooks = async (query) => {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${query}`
  );

  return res.data.docs.slice(0, 10).map((book) => ({
    id: book.key.replace("/works/", ""),
    title: book.title,
    author: book.author_name ? book.author_name[0] : "Unknown",
    year: book.first_publish_year
  }));
};

exports.fetchBookDetails = async (id) => {
  const res = await axios.get(`https://openlibrary.org/works/${id}.json`);

  return {
    title: res.data.title,
    description:
      typeof res.data.description === "string"
        ? res.data.description
        : res.data.description?.value || "No description available"
  };
};
