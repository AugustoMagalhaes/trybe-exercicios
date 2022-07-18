const { Book } = require('../models');

const getAll = async () => {
	try {
		const books = await Book.findAll();
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

const getById = async (id) => {
	try {
		const books = await Book.findByPk(id);
		if (!books) {
			return {
				error: { message: `Can't find id ${id}` },
				httpStatus: 404,
			};
		}
		return {
			payload: books,
			httpStatus: 200,
		};
	} catch (err) {
		console.log(error.message);
		return {
			error: { message: 'Something went wrong' },
			httpStatus: 500,
		};
	}
};

const createBook = async (title, author, pageQuantity) => {
	const newBook = await Book.create({ title, author, pageQuantity });

	if (!newBook) {
		return {
			error: { message: 'Something went wrong' },
			httpStatus: 500,
		};
	}

	return {
		payload: newBook,
		httpStatus: 201,
	};
};

const test = async () => {
	const test = await getById(1);
	console.log('teste', test);
};
// test();

module.exports = { getAll, getById, createBook };
