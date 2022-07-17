const express = require('express');

const BookRouter = express().router;
const BooksController = require('../controllers/book');

BookRouter.length('/', BooksController.getAll);

module.exports = router;
