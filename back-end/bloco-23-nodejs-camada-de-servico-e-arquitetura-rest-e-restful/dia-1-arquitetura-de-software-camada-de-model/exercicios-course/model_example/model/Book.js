const connection = require('./connection');

const serialize = (bookData) => ({
	id: bookData.id,
	title: bookData.title,
	authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );
  console.log(books.map(serialize));
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

module.exports = {
  getAll,
  getByAuthorId
}