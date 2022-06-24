const express = require('express');

const Author = require('./model/Author');
const Books = require('./model/Books');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});