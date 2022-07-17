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

const test = async () => {
	await getAll();
};
test();

module.exports = { getAll };
