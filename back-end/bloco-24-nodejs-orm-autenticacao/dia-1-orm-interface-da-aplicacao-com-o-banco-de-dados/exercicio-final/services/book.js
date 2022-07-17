const { Book } = require('../models');
// console.log('Book: ', Book);

const getAll = async () => {
	try {
		const books = await Book.findAll();
		console.log('books serv', books);
		return {
			payload: books,
			httpStatus: 200,
		};
	} catch (err) {
		console.log(err.message);
		return {
			error: { message: 'Can"t find Books' },
			httpStatus: 404,
		};
	}
};

const test = async () => {
	await getAll();
};
test();

module.exports = { getAll };
