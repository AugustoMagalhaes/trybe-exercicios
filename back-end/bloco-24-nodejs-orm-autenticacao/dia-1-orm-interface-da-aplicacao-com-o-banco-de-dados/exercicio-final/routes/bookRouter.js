const express = require('express');

const BookRouter = express.Router();
const BooksController = require('../controllers/book');

BookRouter.get('/', BooksController.getAll);

BookRouter.get('/:id', BooksController.getById);

module.exports = BookRouter;
