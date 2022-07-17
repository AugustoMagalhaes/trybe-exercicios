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
		return {
			payload: books,
			httpStatus: 200,
		};
	} catch (err) {
		console.log(err.message);
		return {
			error: { message: `Can't find book with ${id} id` },
			httpStatus: 404,
		};
	}
};

const test = async () => {
	const test = await getById(1);
	console.log('teste', test);
};
// test();

module.exports = { getAll, getById };
