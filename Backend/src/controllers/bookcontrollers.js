const { fetchBooks, fetchBookDetails } = require("../services/openLibraryService");

exports.searchBooks = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const books = await fetchBooks(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await fetchBookDetails(id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch book details" });
  }
};
