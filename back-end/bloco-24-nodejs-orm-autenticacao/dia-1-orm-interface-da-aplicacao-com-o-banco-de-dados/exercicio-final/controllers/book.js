const BookServices = require('../services/book');

const getAll = async (_req, res) => {
	let error, httpStatus, payload;
	try {
		const books = await BookServices.getAll();
		({ error, httpStatus, payload } = books);
		console.log('eh o error', error);

		if (error) throw new Error(error.message, httpStatus);

		return res.status(httpStatus).json(payload);
	} catch (err) {
		return res.status(httpStatus).json(err);
	}
};

const getById = async (req, res) => {
	const { id } = req.params;
	let error, httpStatus, payload;
	try {
		const books = await BookServices.getById(id);
		({ error, httpStatus, payload } = books);

		if (error) {
			throw new Error(error.message);
		}
		return res.status(httpStatus).json(payload);
	} catch (err) {
		return res.status(httpStatus).json({ message: err.message });
	}
};

const createBook = async (req, res) => {
	const { title, author, pageQuantity } = req.body;
	let error, httpStatus, payload;
	try {
		const newBook = await BookServices.createBook(title, author, pageQuantity);
		({ error, httpStatus, payload } = newBook);
		if (error) throw new Error(error.message);

		return res.status(httpStatus).json(payload);
	} catch (err) {
		return res.status(httpStatus || 500).json({ message: err.message });
	}
};

module.exports = { getAll, getById, createBook };
