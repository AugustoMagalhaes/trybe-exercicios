require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const BookController = require('./controllers/book');

app.use(express.json());

app.get('/books', BookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
