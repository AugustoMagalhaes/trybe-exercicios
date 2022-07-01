const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );

  return books.map(serialize);
}

const getByAuthorId = async (id) => {
  const [booksByAuthorId] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?',
    [id]
  )
  
  if (booksByAuthorId.length === 0) return null;

  return booksByAuthorId;
}

const isBookValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.getAuthorById(authorId))) return false;

  return true;
};

const createBook = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, author_id],
  );
}

module.exports = {
  getAll,
  getByAuthorId,
  isBookValid,
  createBook,
  isBookValid
}