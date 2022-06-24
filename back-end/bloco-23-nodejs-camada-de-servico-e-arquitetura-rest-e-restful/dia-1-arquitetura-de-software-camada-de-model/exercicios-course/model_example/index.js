const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./model/Author');
const Book = require('./model/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.getAuthorById(id);

	if (!author) return res.status(404).json({ message: 'Autor não encontrado' });

	res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksByAuthorId = await Book.getByAuthorId(id);

  if (!booksByAuthorId) return res.status(404).json({message: 'Livro não encontrado'});

  res.status(200).json(booksByAuthorId);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});