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

const updateBook = async (id, { title, author, pageQuantity }) => {
	const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });

	if (!updatedBook) {
		return {
			error: { message: `Can"t find user with id ${id}` },
			httpStatus: 404,
		};
	}

	return {
		payload: updatedBook,
		httpStatus: 200,
	};
};

module.exports = { getAll, getById, createBook, updateBook };
