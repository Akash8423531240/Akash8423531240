const Book = require('../models/Book');
const asyncHandler = require('express-async-handler');

exports.createBook = asyncHandler(async (req, res) => {
  const { title, author, price, category, description } = req.body;
  const coverImage = req.files['coverImage'] ? req.files['coverImage'][0].path : null;
  const file = req.files['file'] ? req.files['file'][0].path : null;

  if (!coverImage || !file) {
    return res.status(400).json({ message: 'Cover image and book file are required' });
  }

  const book = new Book({
    title,
    author,
    price,
    category,
    description,
    coverImage,
    file,
    seller: req.user.id
  });

  await book.save();
  res.status(201).json(book);
});

exports.getBooks = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, category, search } = req.query;
  const query = {};

  if (category) query.category = category;
  if (search) query.title = { $regex: search, $options: 'i' };

  const books = await Book.find(query)
    .populate('category')
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  const count = await Book.countDocuments(query);

  res.json({
    books,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  });
});

exports.getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate('category');
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

exports.updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  if (book.seller.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  const { title, author, price, category, description } = req.body;
  const coverImage = req.files['coverImage'] ? req.files['coverImage'][0].path : book.coverImage;
  const file = req.files['file'] ? req.files['file'][0].path : book.file;

  book.title = title || book.title;
  book.author = author || book.author;
  book.price = price || book.price;
  book.category = category || book.category;
  book.description = description || book.description;
  book.coverImage = coverImage;
  book.file = file;

  await book.save();
  res.json(book);
});

exports.deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  if (book.seller.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  await book.remove();
  res.json({ message: 'Book deleted' });
});
