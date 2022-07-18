const express = require('express');

const BookRouter = express.Router();
const BooksController = require('../controllers/book');

BookRouter.get('/:id', BooksController.getById);

BookRouter.get('/', BooksController.getAll);

BookRouter.post('/', BooksController.createBook);

BookRouter.put('/:id', BooksController.updateBook);

module.exports = BookRouter;
