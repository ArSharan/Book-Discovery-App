const express = require("express");
const { searchBooks, getBookDetails } = require("../controllers/bookController");

const router = express.Router();

router.get("/", searchBooks);
router.get("/:id", getBookDetails);

module.exports = router;
