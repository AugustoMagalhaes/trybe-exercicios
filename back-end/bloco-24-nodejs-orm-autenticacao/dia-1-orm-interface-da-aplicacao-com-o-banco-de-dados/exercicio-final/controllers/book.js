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
		console.log('error no controller', error);
		console.log('httpStatus no controller', httpStatus);
		if (error) {
			throw new Error(error.message);
		}
		return res.status(httpStatus).json(payload);
	} catch (err) {
		console.log('err no catch', err);
		return res.status(httpStatus).json({ message: err.message });
	}
};

module.exports = { getAll, getById };
